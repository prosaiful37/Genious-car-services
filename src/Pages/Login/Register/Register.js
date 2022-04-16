import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';

let errorElement;
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
      if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }


    if(user){
        navigate('/');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='register-from my-5'>
            <h2 className='text-center my-5'>Registration Please !! </h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id='' placeholder='Your Name' />
                
                <input type="email" name='email' id='' placeholder='Email-address' required />
                
                <input type="password" name='password' placeholder='password' required />

                <input type="checkbox" name="terms" id="" />
                <label htmlFor="terms">Accept Genius Car Terms and Condation</label>
                
                <input className='mt-2' type="submit" value='Register' />
            </form>
            {errorElement}
            <p>Already Have An Account? <span className='text-primary register' onClick={navigateLogin}>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;