import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import base_url from "../api/base_url";

const ApplicationForm = () => {
    useEffect(() => {
        document.title = "Application";
    }, []);

    // State variables to store form data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailStatus, setEmailStatus] = useState('');
    const [passwordStatus, setPasswordStatus] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });

    const [errorData, setErrorData] = useState({
        password: false,
        passwordStatus: false
    });

    // Flag to track initial render
    const [isInitialRender, setIsInitialRender] = useState(true);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        setEmailStatus('');
        setPasswordStatus('');
        errorData.passwordStatus = false;

        if(errorData.password){
            toast.error("Password length must be between 8 and 16")
            return;
        }

        // Validate form data
        if (!email || !password || !confirmPassword) {
            toast.error('Please fill in all fields');
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        // Update formData state object with form data
        setFormData({
            userName: email,
            password: password
        });
        setIsInitialRender(false);

        // Handle form submission (e.g., send data to backend)
        console.log('Form submitted:', { email, password });
        // Reset form fields
        setEmail('');
        setConfirmPassword('');
    };

    // Function to handle form submission
    const handleSubmitStatus = (e) => {
        e.preventDefault();

        setEmail('');
        setPassword('');
        setConfirmPassword('');
        errorData.password = false;

        // Validate form data
        if (!emailStatus || !passwordStatus) {
            toast.error('Please fill in all fields');
            return;
        }
        // Handle form submission (e.g., send data to backend)
        console.log('Form submitted:', { emailStatus, passwordStatus });

        // Update formData state object with form data
        setFormData({
            userName: emailStatus,
            password: passwordStatus
        });
        setIsInitialRender(false);

        // Reset form fields
        // setEmailStatus(');
        setPasswordStatus('');
    };

    // Use useEffect to perform side effect after formData state update
    useEffect(() => {
        // Check if it's not the initial render
        if (!isInitialRender) {
            // Check if formData state has changed
            console.log('formData state has changed:', formData);
            // Call signUpUser after formData state has been updated
            if (password === '') {
                signInUser();
            } else {
                signUpUser();
                setPassword('');
            }
        } else {
            // Set the flag to false after the initial render
            setIsInitialRender(true);
        }
    }, [formData, isInitialRender]); // Execute the effect when formData or isInitialRender changes

    const signUpUser = () => {
        //Username and Password
        console.log("Username and Password :: ", formData);
        axios.post(`${base_url}/newUser`, formData).then(
            (response) => {
                console.log(response);
                if (response.data === "user is already present") {
                    toast.error('User Already Present');
                } else {
                    setIsSubmitted(true);
                }
            },
            (error) => {
                console.log(error);
            }
        );

    }

    const signInUser = () => {
        //Username and Password
        console.log("Username and Password :: ", formData);
        axios.post(`${base_url}/signIn`, formData).then(
            (response) => {
                console.log(response);
                if (response.data === "user is not present") {
                    toast.error('User Not Present');
                } else if (response.data === "Wrong Password") {
                    toast.error('Wrong Password');
                } else {
                    setIsSubmitted(true);
                }
            },
            (error) => {
                console.log(error);
            }
        );

    }

    return (
        <div style={{ position: 'relative', width: '1100px', height: '250px' }}>
            <img src="https://indianexpress.com/wp-content/uploads/2019/07/pen.jpg" alt="Example"
                style={{ width: '100%', height: '60%', objectFit: 'cover' }} />
            <div
                style={{
                    position: 'absolute',
                    top: '0%',
                    left: '0%',
                    color: '#ffffff',
                    padding: '10px',
                }}>
                <h1>Application Form</h1>
            </div>
            <ToastContainer />
            {
                !isSubmitted ? (
                    <div>
                        <div style={containerStyle}>
                            <div style={leftPanelStyle}>
                                <h4>New Application</h4>
                                <div style={leftPanelSignUp}>
                                    <Form onSubmit={handleSubmit}>
                                        <div>
                                            <br />
                                            <Form.Label>Email:</Form.Label>
                                            <Form.Control
                                                placeholder="Enter your email address"
                                                type="email"
                                                name="email"
                                                value={email}

                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Form.Label>Password:</Form.Label>
                                            <br />
                                            <Form.Control
                                                placeholder="Enter your password"
                                                type="password"
                                                name="password"
                                                isInvalid={errorData.password}
                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value)
                                                    setErrorData({
                                                        password: e.target.value.length < 8,
                                                        passwordStatus: errorData.passwordStatus
                                                    })
                                                }}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Form.Label>Confirm Password:</Form.Label>
                                            <br />
                                            <Form.Control
                                                placeholder="Re-enter your password"
                                                type="password"
                                                name="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <br />

                                        <div style={{ textAlign: 'center', }}>
                                            <Button type="submit" style={{ border: 'none', backgroundColor: '#7A3129', color: 'white' }}>Sign Up</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                            <div style={space}>
                            </div>
                            <div style={rightPanelStyle}>
                                <h4>Application Status</h4>
                                <div style={rightPanelSignIn}>
                                    <Form onSubmit={handleSubmitStatus}>
                                        <div>
                                            <br />
                                            <Form.Label>Email:</Form.Label>
                                            <br />
                                            <Form.Control
                                                placeholder="Enter your email address"
                                                type="email"
                                                name="email"
                                                value={emailStatus}
                                                onChange={(e) => setEmailStatus(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Form.Label>Password:</Form.Label>
                                            <br />
                                            <Form.Control
                                                placeholder="Enter your password"
                                                type="password"
                                                name="password"
                                                isInvalid={errorData.passwordStatus}
                                                value={passwordStatus}
                                                onChange={(e) => {
                                                    setPasswordStatus(e.target.value)
                                                    setErrorData({
                                                        password: errorData.password,
                                                        passwordStatus: e.target.value.length < 8
                                                    })
                                                }}
                                                required
                                            />
                                        </div>
                                        <br />
                                        <div style={{ textAlign: 'center', }}>
                                            <Button type="submit" style={{ border: 'none', backgroundColor: '#7A3129', color: 'white' }}>Sign In</Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                    <div>
                        <Navigate to="/edit-application-form" state={{ email: formData.userName }} />
                    </div>
                )}
        </div>
    );
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: '58vh',
    paddingTop: '20px',
    paddingLeft: '40px',
    paddingRight: '40px'
};

const leftPanelStyle = {
    flex: '20',
    backgroundColor: '#C4A484',
    textAlign: 'center',
    paddingTop: '10px'
};

const rightPanelStyle = {
    flex: '20',
    backgroundColor: '#C4A484',
    textAlign: 'center',
    paddingTop: '10px'
};

const space = {
    flex: '6',
    backgroundColor: '#ffffff'
};

const leftPanelSignUp = {
    flex: '25',
    textAlign: 'left',
    paddingLeft: '40px',
    paddingRight: '50px'
};

const rightPanelSignIn = {
    flex: '25',
    textAlign: 'left',
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '30px'
};


export default ApplicationForm;