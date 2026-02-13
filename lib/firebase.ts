import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

export interface LeadData {
  fullName: string;
  email: string;
  company?: string;
  website?: string;
  serviceType: string;
  message: string;
  wantAudit: boolean;
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const hasFirebaseConfig = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId);

const app = hasFirebaseConfig ? initializeApp(firebaseConfig) : null;
const db = app ? getFirestore(app) : null;

export const submitLead = async (leadData: LeadData) => {
  if (!db) {
    throw new Error('Firebase is not configured. Set VITE_FIREBASE_* environment variables before submitting leads.');
  }

  return addDoc(collection(db, 'leads'), {
    ...leadData,
    createdAt: serverTimestamp(),
    source: 'website',
  });
};
