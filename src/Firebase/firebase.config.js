// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD58oVtvx4N4ecbAJNWDEeyX13Vn-gSVqg",
  authDomain: "funflix-b16ab.firebaseapp.com",
  projectId: "funflix-b16ab",
  storageBucket: "funflix-b16ab.appspot.com",
  messagingSenderId: "895987831532",
  appId: "1:895987831532:web:647e86bc589a5c42870bc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;