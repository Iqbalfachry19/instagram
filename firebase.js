import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDc7BkuNqlfi8_jZBz_SfHT1vQ55hEGGeQ",
  authDomain: "instagram-40b79.firebaseapp.com",
  projectId: "instagram-40b79",
  storageBucket: "instagram-40b79.appspot.com",
  messagingSenderId: "652916603698",
  appId: "1:652916603698:web:e9b1fe8e4b5eda4a80b52b",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
