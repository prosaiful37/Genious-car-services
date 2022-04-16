import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      let from = location.state?.from?.pathname || "/";

    if (loading) {
    return <p>Loading...</p>;
    }

    if(error){
        return error.message;
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

    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='container w-50 mx-auto my-5'>
            <h2 className='text-center py-2'>Please Login !!</h2>
            <Form onSubmit={submitFormHandle} className=' border p-3 shadow '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>{error}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-center'>Are you new genius car? <span className='text-danger register' onClick={navigateRegister}>Please Register</span></p>
            <SocialLogin></SocialLogin>
        </div>
        
    );
};

export default Login;