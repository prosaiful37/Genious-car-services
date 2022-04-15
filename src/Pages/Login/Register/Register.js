import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';


const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='register-from my-5'>
            <h2 className='text-center my-5'>Registration Please !! </h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id='' placeholder='Your Name' />
                
                <input type="email" name='email' id='' placeholder='Email-address' required />
                
                <input type="password" name='password' placeholder='password' required />
                
                <input type="submit" value='Register' />
            </form>
            <p className='text-center'>Already Have An Account? <span className='text-danger register' onClick={navigateLogin}>Please Login</span></p>
        </div>
    );
};

export default Register;