// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1eiHiZEs8Vgsnb5GqT89GTHgUeL_H8OA",
  authDomain: "portfolio-9c030.firebaseapp.com",
  projectId: "portfolio-9c030",
  storageBucket: "portfolio-9c030.firebasestorage.app",
  messagingSenderId: "801114514017",
  appId: "1:801114514017:web:d3d7754139fd11459e0020",
  measurementId: "G-8TKLXD9TKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);