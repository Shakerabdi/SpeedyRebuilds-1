<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SpeedyRebuilds

Marketing site for SpeedyRebuilds built with React + Vite.

---

## 1) Prerequisites (do this first)

- **Node.js 18+** installed.
- A **Firebase account** and a Firebase project you own.
- A domain name (for example: `yourdomain.com`) with access to DNS settings from your domain registrar (Cloudflare, GoDaddy, Namecheap, etc.).

Check your versions:

```bash
node -v
npm -v
```

---

## 2) Run locally (sanity check before deploying)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env.local` in the project root and set:

   ```bash
   GEMINI_API_KEY=your_gemini_key
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   VITE_FIREBASE_MEASUREMENT_ID=...
   ```

3. Start local dev server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in terminal and confirm the site loads and the contact form is visible.

---

## 3) Firebase project setup (console)

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project (or choose existing).
3. In **Project settings → Your apps**, add a **Web app**.
4. Copy Firebase config values and place them in `.env.local` as `VITE_FIREBASE_*` values.
5. In **Build → Firestore Database**, create Firestore (production mode or test mode based on your needs).
6. Make sure your Firestore rules are ready (this repo includes `firestore.rules`).

---

## 4) Install and authenticate Firebase CLI

1. Install CLI globally:

   ```bash
   npm install -g firebase-tools
   ```

2. Login:

   ```bash
   firebase login
   ```

3. In this repo, connect the local project to your Firebase project:

   ```bash
   firebase use --add
   ```

4. Update `.firebaserc` and replace:

   ```json
   "default": "your-firebase-project-id"
   ```

   with your real project id.

---

## 5) Build for production

Run:

```bash
npm run build
```

Expected result: a `dist/` folder is generated.

---

## 6) First deploy to Firebase Hosting

Deploy hosting:

```bash
firebase deploy --only hosting
```

(Recommended) Deploy Firestore rules too:

```bash
firebase deploy --only firestore:rules
```

After hosting deploy completes, Firebase will print a URL like:

- `https://<project-id>.web.app`
- `https://<project-id>.firebaseapp.com`

Open it and verify:
- Home page loads
- Navigation works
- Contact form submits successfully (with valid Firebase env config)

---

## 7) Add your custom domain (step-by-step)

> Example below uses `yourdomain.com` and `www.yourdomain.com`. Replace with your real domain.

### 7.1 Add domain in Firebase Hosting

1. Open Firebase Console → **Hosting**.
2. Click **Add custom domain**.
3. Enter `yourdomain.com` (apex/root) and continue.
4. Firebase will show DNS records to add. Keep this page open.

### 7.2 Configure DNS at your registrar

Add exactly the records Firebase asks for. Typical pattern:

- For apex/root (`yourdomain.com`):
  - One or more **A records** to Firebase Hosting IPs (or records Firebase provides).
- For `www` subdomain:
  - Usually a **CNAME** pointing to `ghs.googlehosted.com` (or target shown by Firebase).

Important:
- If using Cloudflare, set records to **DNS only** (gray cloud) during verification.
- Remove conflicting A/AAAA/CNAME records for the same host.

### 7.3 Verify ownership

Firebase may require a TXT verification record first.

1. Add the TXT record exactly as shown.
2. Wait for DNS propagation (often 5–30 minutes, sometimes longer).
3. Return to Firebase and click **Verify**.

### 7.4 SSL certificate provisioning

After DNS is correct, Firebase automatically provisions SSL.

- Status may show **Provisioning certificate** for a while.
- Once ready, status becomes connected and HTTPS works.

### 7.5 Redirect setup (recommended)

Choose one canonical domain:
- either `https://yourdomain.com`
- or `https://www.yourdomain.com`

Then set redirect for the other hostname in Firebase Hosting custom domain settings.

---

## 8) Production deployment workflow (every update)

For every new release:

1. Pull latest changes.
2. Rebuild:

   ```bash
   npm run build
   ```

3. Deploy:

   ```bash
   firebase deploy --only hosting
   ```

If Firestore rules changed:

```bash
firebase deploy --only firestore:rules
```

---

## 9) Pre-launch checklist

- [ ] `.firebaserc` points to correct Firebase project id.
- [ ] All required `VITE_FIREBASE_*` variables are set correctly.
- [ ] `npm run build` passes with no errors.
- [ ] `firebase deploy --only hosting` succeeds.
- [ ] Custom domain resolves to Firebase Hosting.
- [ ] SSL certificate is active.
- [ ] Contact form writes to Firestore `leads` collection.

---

## 10) Troubleshooting

### Custom domain not connecting
- Check for conflicting DNS records.
- Reduce DNS complexity (temporarily disable proxy/CDN while validating).
- Wait longer for propagation.
- Re-run verification in Firebase console.

### SSL stuck in provisioning
- Usually DNS is incorrect or not fully propagated.
- Verify apex and `www` records exactly match Firebase instructions.

### Contact form fails in production
- Ensure all `VITE_FIREBASE_*` values are present and correct.
- Confirm Firestore is enabled in the same Firebase project.
- Confirm Firestore rules allow expected writes.

---

## Firebase files already configured in this repo

- `firebase.json` is configured for SPA hosting from `dist/` with rewrite to `index.html`.
- `firestore.rules` is included for Firestore rule deployment.
- `.firebaserc` includes the default project alias placeholder.
