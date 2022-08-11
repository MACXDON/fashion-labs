import { db } from "./firebase";
import { getDocs, collection, setDoc, doc, query, where } from "firebase/firestore";

async function getProducts() {
    const listOfProducts = [];

    const snapshot = await getDocs(collection(db, 'Product'));
    
    snapshot.forEach(doc => {
        listOfProducts.push(doc.data())
    })

    return listOfProducts;
}

async function addProducts(data) {
    const ref = collection(db, 'Product');
    const docRef = doc(ref);

    await setDoc(docRef, data);
}

async function queryProduct(categoryToSearch) {
    const ref = collection(db, 'Product');
    const queriedSearch = query(ref, where('category', '==', categoryToSearch));

    const querySnapshot = await getDocs(queriedSearch);

    let listOfProducts = [];

    querySnapshot.forEach(doc => {
        listOfProducts.push(doc.data());
    })

    if(listOfProducts.length === 0) {
        listOfProducts = await getProducts();
    }

    return listOfProducts;
}

export { getProducts, addProducts, queryProduct };