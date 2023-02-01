import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyB4rjeoyHBCYnm_4twiS40HAYaTyeGgOGs",
  authDomain: "ici-uaa.firebaseapp.com",
  projectId: "ici-uaa",
  storageBucket: "ici-uaa.appspot.com",
  messagingSenderId: "297291359425",
  appId: "1:297291359425:web:fb2684ab12a3aa8c032040"
}

export const app = initializeApp(firebaseConfig)