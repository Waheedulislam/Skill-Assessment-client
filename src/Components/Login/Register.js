import React from 'react';
import { Link } from 'react-router-dom';
import Social from './Social';
const Register = () => {
    return (
        <div className='text-center'>
            <h1>Register</h1>
            <Social></Social>
            <h6 className='mt-3 w-50 mx-auto'>Already have an account ? <Link to='/login' className='text-danger pe-auto  text-decoration-none' >Login</Link></h6>
        </div>
    );
};

export default Register;