import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../ServiceDetails/Loading/Loading';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

      let from = location.state?.from?.pathname || "/";

    if (loading || sending) {
    return <Loading></Loading> ;
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if(user){
        navigate(from, { replace: true });
    }

    const submitFormHandle = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value; 

        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = () => {
        navigate('/register')
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please give you email');
        }
    }

    return (
        <div className='container w-50 mx-auto my-5'>
            <h2 className='text-center py-2'>Please Login !!</h2>
            <Form onSubmit={submitFormHandle} className=' border p-3 shadow mb-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <p>{error}</p>
                <Button className='w-100' variant="secondary" type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p className='text-center'>Are you new genius car? <span className='text-primary register' onClick={navigateRegister}>Please Register</span></p>
            <p className='text-center'>Forget Password <span className='text-primary register' onClick={resetPassword}>Password Reset</span></p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
        
    );
};

export default Login;