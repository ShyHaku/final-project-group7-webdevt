import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function UserRegistration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some((user) => user.username === username);

    if (userExists) {
      setError('Username already exists. Please choose another.');
    } else {
      const newUser = { username, password, bankAccount, mobileNumber, email };
      localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
      alert('Registration successful! Please log in.');
      navigate('/user-login');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h1 className="text-center mb-4">User Registration</h1>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form>
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

        <Form.Group controlId="bankAccount">
          <Form.Label>Last 4 Digits of Bank Account</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last 4 digits of your bank account"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="mobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" className="w-100 mt-3" onClick={handleRegister}>
          Register
        </Button>
      </Form>

      <div className="text-center mt-3">
        <Link to="/login">
          <Button variant="link" className="p-0">Back to Login</Button>
        </Link>
      </div>
    </Container>
  );
}

export default UserRegistration;
