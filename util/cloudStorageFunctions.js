import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const productImagesRef = ref(storage, 'images/product-images');

function getImageURL(fileName, file) {
    const filePath = `${productImagesRef}/${fileName}`;
    const imageRef = ref(storage, filePath);

    return uploadBytes(imageRef, file)
        .then(snapshot => {
            console.log(`File: ${fileName} uploaded successfully.`);     
        })
        .then(path => {
            return getDownloadURL(imageRef);
        })
        .then(src => {
            return src;
        })
        .catch(e => {
            console.error(e);
        })
}

export { getImageURL }