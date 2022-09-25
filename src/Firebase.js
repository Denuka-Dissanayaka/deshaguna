// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASoCAUwRClylzHBuWh6lTivJgIy0KppxE",
  authDomain: "deshaguna-d11b9.firebaseapp.com",
  projectId: "deshaguna-d11b9",
  storageBucket: "deshaguna-d11b9.appspot.com",
  messagingSenderId: "533528928811",
  appId: "1:533528928811:web:efd63f6ab961ed994ac06e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             console.log(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }