import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBOlWmL0rpMfCBRAx6l0gGQxYq_f56FsJE",
  authDomain: "react-ecommerce-661ba.firebaseapp.com",
  databaseURL: "https://react-ecommerce-661ba.firebaseio.com",
  projectId: "react-ecommerce-661ba",
  storageBucket: "",
  messagingSenderId: "1053151983731",
  appId: "1:1053151983731:web:394f717bda875ee9c99206"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
