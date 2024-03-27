// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBCsjEJFGvDsQG_-BwNObd5J-MUR6ggy2w",
    authDomain: "chat-c57af.firebaseapp.com",
    projectId: "chat-c57af",
    storageBucket: "chat-c57af.appspot.com",
    messagingSenderId: "754973664256",
    appId: "754973664256:web:e83058ceaa4c72692c64e5",
    measurementId: "G-QW3TRGYBHC"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };