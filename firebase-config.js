import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBh9IniFiyQF99DHjOEZzvhaDRGCtJl6c",
  authDomain: "choys-a2612.firebaseapp.com",
  projectId: "choys-a2612",
  storageBucket: "choys-a2612.appspot.com",
  messagingSenderId: "89386478468",
  appId: "1:89386478468:web:ff10f8b04fa20e00a4cbd1",
  measurementId: "G-8VE717DM4E",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);