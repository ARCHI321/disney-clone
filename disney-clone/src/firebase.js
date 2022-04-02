import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD76uyWuhsOfakFZdBKTzHAD1Z4Tl2Vqgk",
  authDomain: "disneyplus-clone-6313c.firebaseapp.com",
  projectId: "disneyplus-clone-6313c",
  storageBucket: "disneyplus-clone-6313c.appspot.com",
  messagingSenderId: "389945609685",
  appId: "1:389945609685:web:732c721ec169471156015c",
  measurementId: "G-SK8G8H66WB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;