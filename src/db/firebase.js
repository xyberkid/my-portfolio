// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZgR3a2CZHsNXSzdYzh89qe88qSgL9FlA",
  authDomain: "xyber-kid.firebaseapp.com",
  projectId: "xyber-kid",
  
  storageBucket: "xyber-kid.appspot.com",
  messagingSenderId: "480057867751",
  appId: "1:480057867751:web:7ec08af64a4af96b5c1142",
  measurementId: "G-BYBDD6T3HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebaseDB = getFirestore(app);