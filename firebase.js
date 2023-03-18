// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlhA72OIEFuGp5uj3xQaQsXnXZJBXuRn0",
    authDomain: "chat-70d3a.firebaseapp.com",
    projectId: "chat-70d3a",
    storageBucket: "chat-70d3a.appspot.com",
    messagingSenderId: "849967184380",
    appId: "1:849967184380:web:b5b9febed01d3950901a79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();