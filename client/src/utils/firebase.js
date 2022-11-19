// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ_-gRX_iUbWTI9ScvofhHth9BXTUiCL4",
  authDomain: "help-pets-sos.firebaseapp.com",
  projectId: "help-pets-sos",
  storageBucket: "help-pets-sos.appspot.com",
  messagingSenderId: "499066324391",
  appId: "1:499066324391:web:390d3d851c609858352282",
  measurementId: "G-C52LKEQFJT",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
