import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: (process.env as any).VITE_FIREBASE_API_KEY || (import.meta as any).env?.VITE_FIREBASE_API_KEY,
  authDomain: (process.env as any).VITE_FIREBASE_AUTH_DOMAIN || (import.meta as any).env?.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: (process.env as any).VITE_FIREBASE_PROJECT_ID || (import.meta as any).env?.VITE_FIREBASE_PROJECT_ID,
  storageBucket: (process.env as any).VITE_FIREBASE_STORAGE_BUCKET || (import.meta as any).env?.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: (process.env as any).VITE_FIREBASE_MESSAGING_SENDER_ID || (import.meta as any).env?.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: (process.env as any).VITE_FIREBASE_APP_ID || (import.meta as any).env?.VITE_FIREBASE_APP_ID,
  measurementId: (process.env as any).VITE_FIREBASE_MEASUREMENT_ID || (import.meta as any).env?.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/**
 * Submits a lead inquiry to the 'leads' collection in Firestore.
 * @param leadData - The lead information collected from the contact form.
 */
export const submitLead = async (leadData: any) => {
  return await addDoc(collection(db, 'leads'), {
    ...leadData,
    createdAt: serverTimestamp(),
    source: "website"
  });
};