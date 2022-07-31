import { db } from "./firebase";
import { getDocs, collection, setDoc, doc } from "firebase/firestore";

const listOfProducts = [];

const getProducts = async (collectionName) => {
    const snapshot = await getDocs(collection(db, collectionName));
    snapshot.forEach(doc => {
        listOfProducts.push(doc.data())
    })

    return typeof listOfProducts;
}

async function addProducts(data) {
    const ref = collection(db, 'Product');
    const docRef = doc(ref);

    await setDoc(docRef, data);
}

export { getProducts, addProducts };