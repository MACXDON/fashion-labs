const signInPageStyles = {
    
    container: {
        width: '75vw',
        height: '50vh',
        margin: '3rem auto',
        backgroundColor: '#000',
        borderRadius: '7px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    formStyles: {

    }
}

function SignInPage({ email, password, handleSubmit, handleEmailChange, handlePasswordChange }) {
    function handleFormSubmit(e) {
        e.preventDefault();
        handleSubmit();
    }
    
    return (
        <div className="sign-in-page" style={signInPageStyles.container}>

            <div>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input onChange={handleEmailChange} value={email} type='email' placeholder='Email'/>
                    </div>
                    <div>
                        <input onChange={handlePasswordChange} value={password} type='password' placeholder='Password'/>
                    </div>
                    <div>
                        <button>Log In</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default SignInPage;