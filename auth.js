import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, where, getDocs, setDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

 const firebaseConfig = {

  apiKey: "AIzaSyB2hTgHbKLq2UHb78Ns_y5sJaU75a-IoEU",

  authDomain: "american-lexicon.firebaseapp.com",

  projectId: "american-lexicon",

  storageBucket: "american-lexicon.firebasestorage.app",

  messagingSenderId: "491104103691",

  appId: "1:491104103691:web:d1bd7e1ee0e3b6fa89860e",

  measurementId: "G-V55CMMYGLD"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const ADMIN_EMAIL = "zafarbeknajmiddinov238@gmail.com";

export { 
    auth, db, provider, ADMIN_EMAIL, signInWithPopup, signOut, 
    onAuthStateChanged, collection, addDoc, onSnapshot, query, 
    orderBy, where, getDocs, setDoc, doc, updateDoc 
};