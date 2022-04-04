// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGhK42IoY2IWN9BGQuJxoPycC7ljHXL4w",
  authDomain: "clone-by-tariku.firebaseapp.com",
  projectId: "clone-by-tariku",
  storageBucket: "clone-by-tariku.appspot.com",
  messagingSenderId: "319747881627",
  appId: "1:319747881627:web:3f375fe0056fd807b6643e",
  measurementId: "G-Q7FRFR46B1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };