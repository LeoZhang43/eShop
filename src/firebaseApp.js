import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFCBbSGtgpwDKFlK44QmORcCyEazjAdHM",
    authDomain: "eshop-bdb84.firebaseapp.com",
    projectId: "eshop-bdb84",
    storageBucket: "eshop-bdb84.appspot.com",
    messagingSenderId: "264230788351",
    appId: "1:264230788351:web:f53b5a1ad650708fc400ca",
    measurementId: "G-T1B4E8LREE"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };