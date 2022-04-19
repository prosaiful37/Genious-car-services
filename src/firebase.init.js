// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAheg1lv16CEVbuwviZDzzGpV59pMzBpgA",
  authDomain: "genius-car-services-dd1aa.firebaseapp.com",
  projectId: "genius-car-services-dd1aa",
  storageBucket: "genius-car-services-dd1aa.appspot.com",
  messagingSenderId: "274234218505",
  appId: "1:274234218505:web:e7b9796c1f164a9e25c0d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;