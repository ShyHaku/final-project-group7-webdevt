import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const CreateUser = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
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
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="Enter a mobile number"
                pattern="^09\d{9}$"
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
                required
                type="email"
                placeholder="Enter an email"
            />
            </Form.Group>

            <Button variant="success" type="submit">Create</Button>

            </Form>
            </div>
        </div>
        </>
    )
}