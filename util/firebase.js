import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCEKPtddnHnsHZyrRxfyfiF_jCQBX4oqqs",
    authDomain: "fashion-labs.firebaseapp.com",
    projectId: "fashion-labs",
    storageBucket: "fashion-labs.appspot.com",
    messagingSenderId: "79345201876",
    appId: "1:79345201876:web:7a6be1b641eee249bb8141",
    storageBucket: "gs://fashion-labs.appspot.com"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };