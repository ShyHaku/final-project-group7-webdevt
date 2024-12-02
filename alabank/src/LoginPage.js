import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const LoginPage = ({ setUserRole }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === 'admin123') {
            setUserRole('admin');
            navigate('/admin'); // Redirect to admin page
        } else if (username === 'user' && password === 'user123') {
            setUserRole('user');
            navigate('/home'); // Redirect to user page
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <Container>
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default LoginPage;
