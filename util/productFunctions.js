import { db } from "./firebase";
import { getDocs, collection, setDoc, doc, query, where, deleteDoc } from "firebase/firestore";

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

async function deleteProduct(id) {
    const ref = collection(db, 'Product');
    const queriedSearch = query(ref, where('id', '==', id));
    const querySnapshot = await getDocs(queriedSearch);
    
    let documentId;

    querySnapshot.forEach(doc => {
        documentId = doc.id;
    })

    if(documentId) {
        await deleteDoc(doc(db, 'Product', documentId));
    }
}

export { getProducts, addProducts, queryProduct, deleteProduct };