// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxV2a6rO6YCx7l6WgO1ASY3jL5vumLy3M",
  authDomain: "weacctt-ecommerce.firebaseapp.com",
  projectId: "weacctt-ecommerce",
  storageBucket: "weacctt-ecommerce.firebasestorage.app",
  messagingSenderId: "999476735433",
  appId: "1:999476735433:web:c334e1f13b7c1c378bcc18",
  measurementId: "G-EG4HGLZLFP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);