import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk-Jp-Jad2HCKoN5XQaQMB-EVRtPsJcm8",
  authDomain: "recipe-app-8f7b7.firebaseapp.com",
  projectId: "recipe-app-8f7b7",
  storageBucket: "recipe-app-8f7b7.appspot.com",
  messagingSenderId: "500139610613",
  appId: "1:500139610613:web:8b684a9aa61a1c808850bc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth, app };
