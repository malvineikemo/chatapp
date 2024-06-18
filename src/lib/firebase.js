import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-aa98a.firebaseapp.com",
  projectId: "chatapp-aa98a",
  storageBucket: "chat-8953e.appspot.com",
  messagingSenderId: "620921920085",
  appId: "1:620921920085:web:ae386dc102d978e5c912dc",
  measurementId: "G-93706V88XM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()