import React from 'react';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Social = () => {
    const [user] = useAuthState(auth)

    const [signInWithGoogle, guser, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user || guser) {
        navigate('/home')
    }
    return (
        <div className='text-center pt-5'>
            <button onClick={() => signInWithGoogle()} className='btn btn-primary'>Google SignIn</button>
        </div>
    );
};

export default Social;