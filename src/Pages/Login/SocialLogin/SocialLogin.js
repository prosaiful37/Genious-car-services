import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../ServiceDetails/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p> 
    }

    if (loading || loading1) {
    return <Loading></Loading>
    }

    if(user || user1){
        navigate('/');
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='w-50 bg-secondary'></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{height: '1px'}} className='w-50 bg-secondary'></div>
            </div>
            
            <div className='w-50 mx-auto'>
                {errorElement}
                <button 
                    onClick={() => signInWithGoogle()}
                    style={{borderRadius: '50px'}} className='w-100 p-3 border-secondary mb-2'>
                    <img style={{width: '25px', marginRight: '3px'}}  src={google} alt="" />
                    <span className='fw-bold text-secondary' >CONTINUE WITH GOOGLE</span>  
                </button>
                <button style={{borderRadius: '50px'}} className='w-100 p-3 border-secondary mb-2'>
                    <img style={{width: '25px', marginRight: '3px'}}  src={facebook} alt="" />
                    <span className='fw-bold text-secondary'>CONTINUE WITH FACEBOOK</span> 
                </button>
                <button 
                    onClick={() => signInWithGithub()}
                    style={{borderRadius: '50px'}} className='w-100 p-3 border-secondary'>
                    <img style={{width: '25px', marginRight: '3px'}}  src={github} alt="" />
                    <span className='fw-bold text-secondary'>CONTINUE WITH GITHUB</span> 
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;