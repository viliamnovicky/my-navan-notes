// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

// Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDLubSrmWyikRXT6QW1nYW-OKGjxlqC6Xw",
  authDomain: "my-navan-helper.firebaseapp.com",
  projectId: "my-navan-helper",
  storageBucket: "my-navan-helper.firebasestorage.app",
  messagingSenderId: "235747199261",
  appId: "1:235747199261:web:fbd30e127c37b10ab679f4",
  measurementId: "G-DNKX315ELR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const database = getFirestore(app);
export const storage = getStorage(app);
