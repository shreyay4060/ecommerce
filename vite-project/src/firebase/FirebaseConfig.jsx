
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyALhztOXmPh21GsOfgJ4HRkEy8KRCuPT00",
  authDomain: "myecommercewb.firebaseapp.com",
  projectId: "myecommercewb",
  storageBucket: "myecommercewb.firebasestorage.app",
  messagingSenderId: "1065651405558",
  appId: "1:1065651405558:web:b16ce251bdf2e2255c22d7"
};


const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)

export {fireDB,auth}