import { auth } from "../util/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

const signOutButtonStyles = {
    div: {

        position: 'absolute',
        zIndex: '99',
        top: '7rem',
        right: '2rem',
    },

    button: {
        backgroundColor: '#A00',
        color: '#FFF',
        fontWeight: '500',
        border: 'none',
        padding: '0.75rem 1rem',
        borderRadius: '5px',
    }
}

const SignOutButton = () => {
    const router = useRouter();

    function handleClick() {
        signOut(auth)
            .then(() => {
                console.log('Sign out successful');
                router.push('/admin');
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div style={signOutButtonStyles.div}>
            <button style={signOutButtonStyles.button} onClick={handleClick}>Sign Out</button>
        </div>
    );
}
 
export default SignOutButton;