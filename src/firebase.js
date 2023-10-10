// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaxmbpuoPMfAHtrU9Xrjr9FE5Cgfrc_H4",
  authDomain: "travelplanner-21935.firebaseapp.com",
  projectId: "travelplanner-21935",
  storageBucket: "travelplanner-21935.appspot.com",
  messagingSenderId: "179015537125",
  appId: "1:179015537125:web:04c90dc096a9425d9c5f0c",
  measurementId: "G-P3NXH13YZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*const storage = getStorage();
const storageRef = ref(storage)

const imgesRef = ref(storage, 'images')
const sparkyRef = ref(storage, 'image/sparky.jpg')*/

export default {app, /*storage*/}