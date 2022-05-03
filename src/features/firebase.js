// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYszIzHNUiawBae8032FOJXOH5lDMx9bM",
  authDomain: "disney-clone-2e9b0.firebaseapp.com",
  projectId: "disney-clone-2e9b0",
  storageBucket: "disney-clone-2e9b0.appspot.com",
  messagingSenderId: "976320482806",
  appId: "1:976320482806:web:a316569ebadbf69f430bd7",
  measurementId: "G-BZN8F3TBYP",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
