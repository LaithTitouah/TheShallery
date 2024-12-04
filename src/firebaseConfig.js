// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoTgnZHcWJ2_mtVKUfivb3Bel3UR8RyYA",
  authDomain: "viddylist.firebaseapp.com",
  projectId: "viddylist",
  storageBucket: "viddylist.firebasestorage.app",
  messagingSenderId: "6848364983",
  appId: "1:6848364983:web:96c30e461bfd496f052832",
  measurementId: "G-LZYC1NHMF4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)