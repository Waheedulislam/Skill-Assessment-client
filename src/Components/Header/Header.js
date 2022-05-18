import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div >
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/show">Show Task</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/show">complete</Link>
                </li>
                <li class="nav-item">
                    {

                        user ?
                            <button className='btn btn-link text-primary text-decoration-none' onClick={handleSignOut}>sign out</button>
                            :
                            <Link class="nav-link active" aria-current="page" to="/Login">Login</Link>
                    }
                </li>
            </ul>
        </div>
    );
};

export default Header;