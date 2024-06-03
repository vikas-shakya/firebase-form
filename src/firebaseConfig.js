// src/firebaseConfig.js

import { initializeApp } from "firebase/app";

// Extra step needed
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3MZlPpGAqXpLo6Yl40TaG3D8oCdAW6gw",
  authDomain: "fir-basic-form.firebaseapp.com",
  projectId: "fir-basic-form",
  storageBucket: "fir-basic-form.appspot.com",
  messagingSenderId: "811888391777",
  appId: "1:811888391777:web:72a7fefaafd2046216dc20",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
