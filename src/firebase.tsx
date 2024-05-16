// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_PUBLIC_API_KEY,
  authDomain: "enitiate-9d2da.firebaseapp.com",
  projectId: "enitiate-9d2da",
  storageBucket: "enitiate-9d2da.appspot.com",
  messagingSenderId: "799708430762",
  appId: "1:799708430762:web:a304adf822bb2c6faa2bd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;