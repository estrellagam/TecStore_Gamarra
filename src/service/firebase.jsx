// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSi81uNTuprsRjF8qehEnLTnbOBl9l_uM",
  authDomain: "tecstore-69ed6.firebaseapp.com",
  projectId: "tecstore-69ed6",
  storageBucket: "tecstore-69ed6.appspot.com",
  messagingSenderId: "710428115235",
  appId: "1:710428115235:web:18191b01bbb67fe0b98c96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
