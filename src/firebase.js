// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// ❌ Removed getAnalytics for now since it's optional and may throw errors in dev

const firebaseConfig = {
  apiKey: "AIzaSyDbV-4IcnHiacBEj1kfVE6iz-PNoR6Lhx0",
  authDomain: "opmovies-9b25b.firebaseapp.com",
  projectId: "opmovies-9b25b",
  storageBucket: "opmovies-9b25b.appspot.com", // ✅ fixed .app to .app**spot**.com
  messagingSenderId: "148418910803",
  appId: "1:148418910803:web:3ff7f8fecadbaa183684a6",
  measurementId: "G-P0CBJRZQV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Export only what you use
export { auth, db };

