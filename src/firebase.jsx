// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP922kUQ0kdn3RFZd-VlVDLAUcg4CJdsA",
  authDomain: "hack2change-bbcd8.firebaseapp.com",
  projectId: "hack2change-bbcd8",
  storageBucket: "hack2change-bbcd8.appspot.com",
  messagingSenderId: "742051116510",
  appId: "1:742051116510:web:8c3dd1c4ecb2bb6886994f",
//   measurementId: "G-GXC6B0V91T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export {app , auth , analytics}