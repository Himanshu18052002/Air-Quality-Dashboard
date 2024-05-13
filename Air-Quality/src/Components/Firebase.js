// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcCGFFngPbNbBmQtU5OHWPEl6uygshbXw",
  authDomain: "air-quality-5cb1c.firebaseapp.com",
  projectId: "air-quality-5cb1c",
  storageBucket: "air-quality-5cb1c.appspot.com",
  messagingSenderId: "395778007405",
  appId: "1:395778007405:web:3d1e515cbbd807bc37fa64",
  measurementId: "G-3JPXS6VVZ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
