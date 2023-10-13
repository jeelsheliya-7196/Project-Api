// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCra6cYxYKZUuf2eehMjm9tu6yjJRv-zto",
  authDomain: "react-firebase-92120.firebaseapp.com",
  projectId: "react-firebase-92120",
  storageBucket: "react-firebase-92120.appspot.com",
  messagingSenderId: "49382932651",
  appId: "1:49382932651:web:e3b943cda61c3ecefc37ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;
