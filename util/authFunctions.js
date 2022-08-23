import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        const user = userCredential.user;
        console.log('Log in successful', user);
    })
    .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode + ' ' + errorMessage);
    });

export { signInWithEmailAndPassword };