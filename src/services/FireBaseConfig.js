import Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAp6Q4rUGg7QQdfOEi86Zwyi0YcU6SnUBQ",
    authDomain: "crudproject-19a21.firebaseapp.com",
    databaseURL: "https://crudproject-19a21.firebaseio.com",
    projectId: "crudproject-19a21",
    storageBucket: "crudproject-19a21.appspot.com",
    messagingSenderId: "896942028967",
    appId: "1:896942028967:web:d64112ef33d6fc5cb54382",
    measurementId: "G-12ZJZBBW2V"
};
// Initialize Firebase
const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
