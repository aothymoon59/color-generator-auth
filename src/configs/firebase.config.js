// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwcJmVm7sQSHmvT3Y9z1ZY-y-ZmRVdEZI",
  authDomain: "color-firebase-auth.firebaseapp.com",
  projectId: "color-firebase-auth",
  storageBucket: "color-firebase-auth.appspot.com",
  messagingSenderId: "406108807434",
  appId: "1:406108807434:web:f82e684082a5f7b301daf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
