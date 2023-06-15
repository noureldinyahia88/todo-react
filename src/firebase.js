// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhtJawonkZbN1DnHUQJTO5gQGFr0TZZbA",
  authDomain: "todo-list-4dddb.firebaseapp.com",
  projectId: "todo-list-4dddb",
  storageBucket: "todo-list-4dddb.appspot.com",
  messagingSenderId: "567653705433",
  appId: "1:567653705433:web:d6d98666c332d569ff00c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)