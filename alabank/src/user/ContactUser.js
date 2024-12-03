import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        

        if (email && accountNumber && message) {
            setSuccess(true);
            setError(false);
            setEmail('');
            setAccountNumber('');
            setMessage('');
        } else {
            setError(true);
            setSuccess(false);
        }
    };

    return (
        <>
        <Container className="mt-5">
            <h2>Contact Us</h2>
            {success && <Alert variant="success">Message sent successfully!</Alert>}
            {error && <Alert variant="danger">Please fill in all fields.</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email" className='mb-3'>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="accountNumber" className='mb-3'>
                    <Form.Label>Account Number:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your account number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="message" className='mb-3'>
                    <Form.Label>Message:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter your message or concern"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

        <div className="footer">
        <div className="content">
          <h2>Get in Touch</h2>
          <p>
            <b>Address:</b> No. 40, Galle Road, Moratuwa, Alabang.
          </p>
          <p>
            <b>Email:</b> Alabank@gmail.com
          </p>
          <p>
            <b>Tel:</b> +94 71 485 1234
          </p>
          <p align="center">Alabank ©2024 Created by Group 7</p>
        </div>
      </div>
        </>
    );
};

export default ContactPage;