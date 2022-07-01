import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGr6Q1XefYjxAuuJduXXQasJIC0Gzf4GM",
  authDomain: "hms-ae194.firebaseapp.com",
  projectId: "hms-ae194",
  storageBucket: "hms-ae194.appspot.com",
  messagingSenderId: "895390196586",
  appId: "1:895390196586:web:c17b89eef151b81a073b13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let db = getFirestore(app);
const userDoc = (userId) => doc(db, "users", userId);
export { auth, userDoc };
