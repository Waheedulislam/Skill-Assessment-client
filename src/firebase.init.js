// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCBHpfxOjgvRUUXzMhJfopx1v4eXuPQAs",
    authDomain: "todo-task-c7697.firebaseapp.com",
    projectId: "todo-task-c7697",
    storageBucket: "todo-task-c7697.appspot.com",
    messagingSenderId: "94335806759",
    appId: "1:94335806759:web:6683b1bd9865339e9e8d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default (auth);