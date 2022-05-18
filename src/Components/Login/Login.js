import React from 'react';
import { Link } from 'react-router-dom';
import Social from './Social';

const Login = () => {
    return (
        <div className='text-center'>
            <h1>Login</h1>
            <Social></Social>
            <h6 className='mt-3 w-50 mx-auto'>Don't have an account? <Link to='/register' className='text-danger pe-auto  text-decoration-none'>Create Account</Link></h6>
        </div>
    );
};

export default Login;