// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAxqhX4BJRS1O4sjYOn65rV1pazPqNyekI",
	authDomain: "react-auth-5e3f5.firebaseapp.com",
	projectId: "react-auth-5e3f5",
	storageBucket: "react-auth-5e3f5.appspot.com",
	messagingSenderId: "693613399148",
	appId: "1:693613399148:web:b87383133e3c4583389c49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
