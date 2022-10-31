import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Google from '../assets/google.png';
// import { signIn, signOut } from '../states/actions/authActions/index';
// import { connect } from 'react-redux';


const GoogleAuth = () => {
    const [, setAuth] = useState();
    const navigate = useNavigate();
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_OAUTH_KEY,
                scope: 'email'
                // plugin_name: "Afripay360",
            })
            .then(() => {
                const auth = window.gapi.auth2.getAuthInstance();
                setAuth(auth);
                // onAuthChange(auth.isSignedIn.get());
                setIsSignedIn(true)
                // auth.isSignedIn.listen(onAuthChange);
                
            })
        })
        // const onAuthChange = (isSignedIn) => {
        //     const auth = window.gapi.auth2.getAuthInstance();
        //     if (isSignedIn) {
        //     signIn(auth.currentUser.get().getId(),
        //         auth.currentUser.get().gv.tX);
        //     } else {
        //     signOut();
        //     } 
        // }

    }, []);

    const onSignClick = () => {
        window.gapi.auth2.getAuthInstance().signIn();
        if (window.gapi.auth2.getAuthInstance().signIn()) {
            console.log("Signed In Successfully")
            navigate('/');  
        }
    };

    const renderAuthButton = () => {
        // if (isSignedIn === false) {
        //     return "";
        // } else {
            return (
                <button onClick={() => onSignClick()} disabled={isSignedIn} className='flex 
                items-center justify-center mb-8 py-2 space-x-3 w-full border-4 rounded-xl shadow-sm
                hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'
                >
                    <img src={Google} alt={Google} className="w-5"/>
                    <span className='text-black'>Log in with Google</span>
                </button>
            )
        // }
    }

    return (
        <>
           <div>{renderAuthButton()}</div> 
        </>
    )
}



// const mapStateToprops = state => {
//     return { isSignedIn: state.auth.isSignedIn };
// }
export default GoogleAuth;
