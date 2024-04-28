import React, { useState, useEffect } from "react";
import axios from "axios";
import base_url from "../api/base_url";
import { Container, Form, Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditApplicationForm = () => {
    useEffect(() => {
        // Your function to run just before the page/component is open
        toast.success('Authentication Done Successfully!');
        console.log("Value from last component : ", location.state);
        // You can perform any actions here, such as fetching data, setting up subscriptions, etc.
        console.log(userData);
        axios.post(`${base_url}/getApplication`, userData).then(
            (response) => {
                console.log(response);
                setFormData(response.data);
            },
            (error) => {
                console.log(error);
            }
        );


    }, []); // Empty dependency array ensures the effect runs only once    

    const location = useLocation();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const isAlphabet = (str) => {
        const regex = /^[a-zA-Z]+$/;
        return regex.test(str);
    }

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailId: location.state.email,
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        course: '',
        twelthmarks: '',
    });

    const [errorData, setErrorData] = useState({
        firstName: false,
        lastName: false,
        phoneNumber: false,
        zip: false,
        twelthmarks: false,
    });

    const [userData, setUserData] = useState({
        userName: location.state.email,
        password: ''
    });

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        validation(fieldName, fieldValue);
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const validation = (name, value) => {
        if ("twelthmarks" === name) {
            setErrorData({
                twelthmarks: (isNaN(value) || value < 0 || value > 100), zip: errorData.zip,
                phoneNumber: errorData.phoneNumber, firstName: errorData.firstName,
                lastName: errorData.lastName
            });
        } else if ("zip" === name) {
            setErrorData({
                twelthmarks: errorData.twelthmarks, zip: (isNaN(value) || value < 111111 || value > 999999),
                phoneNumber: errorData.phoneNumber, firstName: errorData.firstName,
                lastName: errorData.lastName
            });
        } else if ("phoneNumber" === name) {
            setErrorData({
                twelthmarks: errorData.twelthmarks, zip: errorData.zip,
                phoneNumber: (isNaN(value) || value < 1111111111 || value > 9999999999),
                firstName: errorData.firstName, lastName: errorData.lastName
            });
        } else if ("firstName" === name) {
            setErrorData({
                twelthmarks: errorData.twelthmarks, zip: errorData.zip,
                phoneNumber: errorData.phoneNumber,
                firstName: (!isAlphabet(value)), lastName: errorData.lastName
            });
        } else if ("lastName" === name) {
            setErrorData({
                twelthmarks: errorData.twelthmarks, zip: errorData.zip,
                phoneNumber: errorData.phoneNumber, firstName: errorData.firstName,
                lastName: (!isAlphabet(value))
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errorExist = false;
        if (errorData.firstName) { toast.error("First Name should be only alphabets!!"); errorExist = true; }
        if (errorData.lastName) { toast.error("Last Name should be only alphabets!!"); errorExist = true; }
        if (errorData.phoneNumber) { toast.error("Incorrect Phone Number!!"); errorExist = true; }
        if (errorData.zip) { toast.error("Zip Code should be of length six!!"); errorExist = true; }
        if (errorData.twelthmarks) { toast.error("Percentage must be between 0 and 100!!"); errorExist = true; }
        if (errorExist) return;

        // You can handle form submission logic here, like sending data to a server
        formData.emailId = location.state.email;
        console.log('Form Email:', formData.emailId);
        console.log('Form submitted:', formData);
        axios.post(`${base_url}/newApplication`, formData).then(
            (response) => {
                console.log(response);
                if (response.data === "Application Form Saved!!") {
                    toast.success(response.data);
                    setFormSubmitted(true);

                } else {
                    toast.error(response.data);
                }
            },
            (error) => {
                console.log(error);
            }
        );
    };

    return (
        <Container>
            <ToastContainer />
            <h1>Application Form</h1>
            <Form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Form.Group controlId="firstName" style={{ flex: 1, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                        <Form.Label >First Name:</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            disabled={formSubmitted}
                            required={true}
                            isInvalid={errorData.firstName}
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="lastName" style={{ flex: 1, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            disabled={formSubmitted}
                            required={true}
                            isInvalid={errorData.lastName}
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Form.Group controlId="email" style={{ flex: 1, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            disabled="true"
                            value={formData.emailId}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="phoneNumber" style={{ flex: 1, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control
                            type="tel"
                            name="phoneNumber"
                            disabled={formSubmitted}
                            required={true}
                            isInvalid={errorData.phoneNumber}
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Form.Group controlId="address" style={{ flex: 1, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                        <Form.Label>Address:</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            disabled={formSubmitted}
                            required={true}
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="city" style={{ flex: 1, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                        <Form.Label>City:</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            disabled={formSubmitted}
                            required={true}
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Form.Group controlId="state" style={{ flex: 1, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                        <Form.Label>State:</Form.Label>
                        <Form.Control
                            type="text"
                            name="state"
                            disabled={formSubmitted}
                            required={true}
                            value={formData.state}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="zip" style={{ flex: 1, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                        <Form.Label>Zip Code:</Form.Label>
                        <Form.Control
                            type="text"
                            name="zip"
                            disabled={formSubmitted}
                            required={true}
                            isInvalid={errorData.zip}
                            value={formData.zip}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Form.Group controlId="course" style={{ flex: 1, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                        <Form.Label>Course:</Form.Label>
                        <Form.Select
                            type="text"
                            name="course"
                            disabled={formSubmitted}
                            required={true}
                            value={formData.course}
                            onChange={handleChange}
                        >
                            <option value="">Select a course</option>
                            <option value="BTech">B.Tech</option>
                            <option value="BSc">B.Sc</option>
                            <option value="BBA">B.B.A</option>
                            <option value="MTech">M.Tech</option>
                            <option value="MSc">M.Sc</option>
                            <option value="MBA  ">M.B.A</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="twelthmarks" style={{ flex: 1, paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px' }}>
                        <Form.Label>12th Percentage:</Form.Label>
                        <Form.Control
                            type="text"
                            name="twelthmarks"
                            disabled={formSubmitted}
                            required={true}
                            isInvalid={errorData.twelthmarks}
                            value={formData.twelthmarks}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </div>
                <br />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <Button variant="primary" type="submit" style={{ border: 'none', backgroundColor: '#7A3129', color: 'white' }} >
                            Submit
                        </Button>
                    </div>
                </div>
            </Form>
        </Container>
    );
}

export default EditApplicationForm;