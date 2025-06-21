// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDJa4blQmhSE24g65ihdh4QWRga74AcO0Y", // Replace with your config
//   authDomain: "your-app.firebaseapp.com",
//   projectId: "your-app-id",
//   storageBucket: "your-app.appspot.com",
//   messagingSenderId: "xxxxxx",
//   appId: "xxxxxx"
// };

const firebaseConfig = {
    apiKey: "AIzaSyDJa4blQmhSE24g65ihdh4QWRga74AcO0Y",
    authDomain: "bargarhkonnect.firebaseapp.com",
    projectId: "bargarhkonnect",
    storageBucket: "bargarhkonnect.firebasestorage.app",
    messagingSenderId: "19020160450",
    appId: "1:19020160450:web:e8d8b99ecaddda90658a5b",
    measurementId: "G-3JD42L3RYC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore DB
export const db = getFirestore(app);
