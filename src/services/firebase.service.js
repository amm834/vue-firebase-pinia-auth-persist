// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA" +
        "j18s2s7cUb87eiPmaziE5oHJYnMZ_k9w",
    authDomain: "vue-firebase-auth-only.firebaseapp.com",
    projectId: "vue-firebase-auth-only",
    storageBucket: "vue-firebase-auth-only.appspot.com",
    messagingSenderId: "96047735686",
    appId: "1:96047735686:web:5ffd0b723f051d34878207"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}