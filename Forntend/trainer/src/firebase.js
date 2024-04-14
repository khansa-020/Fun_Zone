// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/storage'; // Import additional Firebase services if needed

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeWdJRb9R0_gAWgvE4YybPhPjZiXOF-Xo",
  authDomain: "frist-try-bb22d.firebaseapp.com",
  projectId: "frist-try-bb22d",
  storageBucket: "frist-try-bb22d.appspot.com",
  messagingSenderId: "627645300946",
  appId: "1:627645300946:web:3010e19959e6d6a96c2d0b",
  measurementId: "G-KWY86TJ2ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app };


