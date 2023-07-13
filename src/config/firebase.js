import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

//  Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlo2vOpa77GSV0J0XU0YVB5976sO0fTgc",
    authDomain: "fir-login-signup-46f0b.firebaseapp.com",
    projectId: "fir-login-signup-46f0b",
    storageBucket: "fir-login-signup-46f0b.appspot.com",
    messagingSenderId: "1046889088085",
    appId: "1:1046889088085:web:7f4e7e415d124fe77880dc",
    measurementId: "G-HJHZW4DP3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth}