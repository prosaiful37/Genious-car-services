import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../../ServiceDetails/Loading/Loading';

const RequirAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification] = useSendEmailVerification(auth);

    if(loading){
        return <Loading></Loading>;
    }

    if(!user){
       return <Navigate to="/login" state={{ from: location }} replace />
    }

    if(!user.emailVerified){
        return <div className='my-5'>
            <h2 className='text-danger'>Your Email is Not Varified</h2>
            <h5 className='text-success'>Please Varified Your Email address</h5>
            <button
                className='btn btn-info'
                onClick={async () => {
                await sendEmailVerification();
                toast('Sent email');
                }}
                >
                Verify email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }

    return children;
};

export default RequirAuth;