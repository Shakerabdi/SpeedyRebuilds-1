import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

// Exercise the actual delivery module without sending email or writing to Firebase.
let storeCalls = 0;
let failStorage = false;
let stallStorage = false;
globalThis.__speedyTestStore = async () => {
  storeCalls += 1;
  if (stallStorage) return new Promise(() => {});
  if (failStorage) throw new Error('Simulated backup failure');
  return { id: 'test-lead' };
};
const server = await createServer({
  root: fileURLToPath(new URL('../', import.meta.url)),
  envFile: false,
  appType: 'custom',
  server: { middlewareMode: true },
  logLevel: 'error',
  ssr: { noExternal: ['firebase'] },
  plugins: [{
    name: 'mock-firebase-for-delivery-check',
    enforce: 'pre',
    resolveId(id) {
      if (id === 'firebase/app' || id === 'firebase/firestore') return `\0test:${id}`;
    },
    load(id) {
      if (id === '\0test:firebase/app') return 'export const initializeApp = () => ({});';
      if (id === '\0test:firebase/firestore') {
        return 'export const getFirestore = () => ({}); export const collection = () => ({}); export const serverTimestamp = () => 0; export const addDoc = () => globalThis.__speedyTestStore();';
      }
    },
  }],
});
for (const key of ['API_KEY', 'AUTH_DOMAIN', 'PROJECT_ID', 'STORAGE_BUCKET', 'MESSAGING_SENDER_ID', 'APP_ID']) {
  server.config.env[`VITE_FIREBASE_${key}`] = 'test-value';
}
const originalFetch = globalThis.fetch;
const originalWarn = console.warn;
const lead = { fullName: 'Test User', email: 'test@example.invalid', message: 'Delivery check' };

try {
  const { submitLeadAndSendEmail } = await server.ssrLoadModule('/lib/firebase.ts');
  globalThis.fetch = async () => ({ ok: true, json: async () => ({ success: 'true' }) });
  await submitLeadAndSendEmail(lead);
  assert.equal(storeCalls, 1, 'Accepted email should be backed up.');

  failStorage = true;
  let warned = false;
  console.warn = () => { warned = true; };
  await assert.doesNotReject(submitLeadAndSendEmail(lead), 'A backup failure must not report accepted email as failed.');
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(warned, true);
  assert.equal(storeCalls, 2);

  failStorage = false;
  stallStorage = true;
  let timer;
  const outcome = await Promise.race([
    submitLeadAndSendEmail(lead).then(() => 'accepted'),
    new Promise((resolve) => { timer = setTimeout(() => resolve('timed out'), 200); }),
  ]);
  clearTimeout(timer);
  assert.equal(outcome, 'accepted', 'An offline backup must not hold up email confirmation.');
  stallStorage = false;

  globalThis.fetch = async () => ({ ok: true, json: async () => ({ success: false }) });
  await assert.rejects(submitLeadAndSendEmail(lead), /did not confirm/);
  assert.equal(storeCalls, 3, 'Rejected email must not be treated as delivered.');

  globalThis.fetch = async () => ({ ok: false });
  await assert.rejects(submitLeadAndSendEmail(lead), /Unable to send/);
  assert.equal(storeCalls, 3);

  globalThis.fetch = async () => { throw new Error('Simulated network failure'); };
  await assert.rejects(submitLeadAndSendEmail(lead), /network failure/);
  console.log('Passed 6 delivery checks. No real email or database requests were made.');
} finally {
  globalThis.fetch = originalFetch;
  console.warn = originalWarn;
  delete globalThis.__speedyTestStore;
  await server.close();
}
