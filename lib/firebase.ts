import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const env = import.meta.env;

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
};

const requiredKeys: Array<keyof typeof firebaseConfig> = [
  'apiKey',
  'authDomain',
  'projectId',
  'storageBucket',
  'messagingSenderId',
  'appId',
];

const missingKeys = requiredKeys.filter((key) => !firebaseConfig[key]);
const isConfigured = missingKeys.length === 0;

const app = isConfigured ? initializeApp(firebaseConfig) : null;
export const db = app ? getFirestore(app) : null;

/**
 * Submits a lead inquiry to the 'leads' collection in Firestore.
 * Throws a clear error if Firebase env vars are missing.
 */
export const submitLead = async (leadData: Record<string, unknown>) => {
  if (!db) {
    throw new Error(
      `Firebase is not configured. Missing env vars: ${missingKeys
        .map((key) => `VITE_FIREBASE_${key.replace(/[A-Z]/g, (c) => `_${c}`).toUpperCase()}`)
        .join(', ')}`
    );
  }

  return addDoc(collection(db, 'leads'), {
    ...leadData,
    createdAt: serverTimestamp(),
    source: 'website',
  });
};

/**
 * Sends lead details to email and stores a copy in Firestore.
 * Note: formsubmit.co may require a one-time inbox confirmation.
 */
export const submitLeadAndSendEmail = async (leadData: Record<string, unknown>) => {
  const formattedData = Object.entries(leadData)
    .map(([key, value]) => `${key}: ${String(value ?? '')}`)
    .join('\n');

  const emailResponse = await fetch('https://formsubmit.co/ajax/contact@speedyrebuilds.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: 'New Website Lead - SpeedyRebuilds',
      _template: 'table',
      _captcha: 'false',
      message: formattedData,
      ...leadData,
    }),
  });

  if (!emailResponse.ok) {
    throw new Error('Unable to send lead email.');
  }

  await submitLead(leadData);
};
