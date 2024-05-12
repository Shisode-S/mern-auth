// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   apiKey: "AIzaSyAtlGlA6e9KDwtBAukvy864rFn_32ja1-4",
  authDomain: "mern-auth-ce00a.firebaseapp.com",
  projectId: "mern-auth-ce00a",
  storageBucket: "mern-auth-ce00a.appspot.com",
  messagingSenderId: "515463464737",
  appId: "1:515463464737:web:a0759a9c6cd39fac596060"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);


 export default app;