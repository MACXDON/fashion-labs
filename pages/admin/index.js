import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'
import SignInPage from '../../components/SignInPage';
import { useState } from 'react';
import { auth } from '../../util/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Admin = (props) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit() {
        if(email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then(userCredential => {
                    const user = userCredential.user;
                })
                .then(() => {
                    setIsSignedIn(true);
                    console.log(isSignedIn);
                    
                    router.push('/admin/products')
                })
                .catch(error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log(errorCode + ' ' + errorMessage);
                });
        }
        
        setEmail('');
        setPassword('');
    }

    const adminNavCategories = ['TRANSACTIONS', 'PRODUCTS'];

    return (
        <div className={styles.container} id="admin-container" style={{ display: props.display }}>
            <div className='admin-container-nav'>
                <ul>
                    {
                        adminNavCategories.map((category, index) => {
                            const categoryRoute = isSignedIn ? `admin/${category.toLocaleLowerCase()}` : 'admin';
                            return (
                                <li key={index}>
                                    <Link href={categoryRoute}>{category}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='admin-container-main'>
                <SignInPage
                    password={password}
                    email={email}
                    handleEmailChange={handleEmailChange}
                    handlePasswordChange={handlePasswordChange}
                    handleSubmit={handleSubmit}
                    isSignedIn={isSignedIn}
                />
            </div>
        </div>
    )
}

export default Admin;