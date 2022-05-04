// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYfZ-pD0TL39MyNXIy-hUsvVqBudFNOWk",
  authDomain: "disney-clone-b5a81.firebaseapp.com",
  projectId: "disney-clone-b5a81",
  storageBucket: "disney-clone-b5a81.appspot.com",
  messagingSenderId: "25152215218",
  appId: "1:25152215218:web:d69f77fe5f019d2490d1ab",
  measurementId: "G-30XB9K4CY2",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
