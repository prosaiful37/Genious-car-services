import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../ServiceDetails/Loading/Loading';

let errorElement;
const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [updateProfile, updating, error1] = useUpdateProfile(auth);
    
      if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }
    const navigate = useNavigate();

    if(loading || updating){
        return <Loading></Loading>
    }

    const navigateLogin = event => {
        navigate('/login');
    }


    if(user){
        console.log('user', user);
    }

    

    const handleRegister = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.value;

        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/');
        
        
        
    }
    return (
        <div className='register-from my-5'>
            <h2 className='text-center my-5'>Registration Please !! </h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id='' placeholder='Your Name' />
                
                <input type="email" name='email' id='' placeholder='Email-address' required />
                
                <input type="password" name='password' placeholder='password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                {/* <label className={agree? "ps-2 text-primary" : "ps-2 text-danger"} htmlFor="terms">Accept Genius Car Terms and Condation</label> */}
                <label className={`ps-2 ${agree? '': 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Condation</label>
                
                <input 
                disabled={!agree}
                className='mt-2' type="submit" value='Register' 
                />

            </form>
            {errorElement}
            <p>Already Have An Account? <span className='text-primary register' onClick={navigateLogin}>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;