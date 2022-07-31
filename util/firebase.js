import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEKPtddnHnsHZyrRxfyfiF_jCQBX4oqqs",
    authDomain: "fashion-labs.firebaseapp.com",
    projectId: "fashion-labs",
    storageBucket: "fashion-labs.appspot.com",
    messagingSenderId: "79345201876",
    appId: "1:79345201876:web:7a6be1b641eee249bb8141"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };