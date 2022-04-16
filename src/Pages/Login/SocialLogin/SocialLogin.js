import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        
          errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
          ;
        
      }

    if(user){
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
                <button 
                    onClick={() => signInWithGoogle()}
                    style={{borderRadius: '50px'}} className='w-100 p-3 border-secondary mb-2'>
                    <img style={{width: '25px', marginRight: '3px'}}  src={google} alt="" />
                    <span className='fw-bold text-secondary' >CONTINUE WITH GOOGLE</span>  
                </button>
                {errorElement}
                <button style={{borderRadius: '50px'}} className='w-100 p-3 border-secondary mb-2'>
                    <img style={{width: '25px', marginRight: '3px'}}  src={facebook} alt="" />
                    <span className='fw-bold text-secondary'>CONTINUE WITH FACEBOOK</span> 
                </button>
                <button style={{borderRadius: '50px'}} className='w-100 p-3 border-secondary'>
                    <img style={{width: '25px', marginRight: '3px'}}  src={github} alt="" />
                    <span className='fw-bold text-secondary'>CONTINUE WITH GITHUB</span> 
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;