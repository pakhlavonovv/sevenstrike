import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs,getDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY_SECOND,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_SECOND,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_SECOND,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_SECOND,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_SECOND,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_SECOND,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID_SECOND
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();const db = getFirestore(app);
export const auth = getAuth(app)
export { db, collection,doc, getDoc, getDocs };