import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, set } from "firebase/database";

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

export const storage = getStorage(app);

export const auth = getAuth(app);

export function writeUserData(userId, name, email, company) {
  const db = getDatabase();
  const reference = ref(db, "/" + company + "users/" + userId);

  set(reference, {
    username: name,
    email: email,
  });
}
