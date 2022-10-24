// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "laskar-news.firebaseapp.com",
  projectId: "laskar-news",
  storageBucket: "laskar-news.appspot.com",
  messagingSenderId: "1044024419982",
  appId: "1:1044024419982:web:1dbce0191d31904e18cbdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);