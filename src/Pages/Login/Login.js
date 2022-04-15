import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const submitFormHandle = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value; 

        console.log(email, password);

        

    }

    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='container my-5'>
            <h2 className='text-center py-2'>Please Login !!</h2>
            <Form onSubmit={submitFormHandle} className='w-50 mx-auto border p-5 shadow '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-center'>Are you new genius car? <span className='text-danger register' onClick={navigateRegister}>Please Register</span></p>
        </div>
        
    );
};

export default Login;