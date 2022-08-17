import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const productImagesRef = ref(storage, 'images/product-images');

function uploadProductImage(fileName, file) {
    uploadBytes(productImagesRef, file)
        .then(snapshot => {
            console.log(`File: ${fileName} uploaded successfully.`);
        })
        .catch(e => {
            console.error(e);
        })

}

function downloadProductImage(file) {
    const imageRef = ref(storage, file);
    let imageSrc;

    getDownloadURL(imageRef)
        .then(src => {
            console.log(src);
            imageSrc = src;
            return imageSrc;
        })
        .catch(e => {
            console.log(e);
        });
}

export { uploadProductImage, downloadProductImage }