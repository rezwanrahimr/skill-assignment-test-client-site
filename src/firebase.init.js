// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVT22UwpsyFutff-S9cJmBEE4a2LzQDkY",
  authDomain: "skill-assignment-test.firebaseapp.com",
  projectId: "skill-assignment-test",
  storageBucket: "skill-assignment-test.appspot.com",
  messagingSenderId: "536067412538",
  appId: "1:536067412538:web:2f7925ce61e1cbe8c79b03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;