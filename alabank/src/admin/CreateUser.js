import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const CreateUser = ({ setUsers }) => {

    const [validated, setValidated] = useState(false);

    const [usernameValue, setUsernameValue] = useState('');
    const [mobileNumberValue, setMobileNumberValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        } else {
            event.preventDefault();
        
            const user = {
              username: usernameValue,
              mobileNumber: mobileNumberValue,
              email: emailValue
            };
        
            setUsers((prevUsers) => {
              const existingUser = prevUsers.find((existingUser) => existingUser.username === user.username);
        
              if (existingUser) {
                alert('That username is taken!');
                return prevUsers; // Return the original array if the user already exists
              } else {
                alert('New user account created!');
                return [...prevUsers, user]; // Add the new user to the array
              }
            });
        
            setUsernameValue('');
            setMobileNumberValue('');
            setEmailValue('');
            setValidated(false);
        }

        setValidated(true);
    };

    return (
        <>
        <div className="m-5">
            <h1 className="text-center mb-4">Create a User Account</h1>

            <div style={{paddingLeft: 300, paddingRight: 300}}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label>Username</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Enter a unique username"
                value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Enter a mobile number"
                pattern="^09\d{9}$"
                value={mobileNumberValue} onChange={(e) => setMobileNumberValue(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control
                required
                type="email"
                placeholder="Enter an email"
                value={emailValue} onChange={(e) => setEmailValue(e.target.value)}
            />
            </Form.Group>

            <Button variant="success" type="submit">Create</Button>

            </Form>
            </div>
        </div>
        </>
    )
}