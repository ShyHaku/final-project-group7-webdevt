import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UserRegistration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some((user) => user.username === username);

    if (userExists) {
      alert('Username already exists. Please choose another.');
    } else {
      const newUser = { username, password, bankAccount, mobileNumber, email };
      localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
      alert('Registration successful! Please log in.');
      navigate('/user-login');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>User Registration</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '80%' }}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '80%' }}
      />
      <br />
      <input
        type="text"
        placeholder="Last 4 Digits of Bank Account"
        value={bankAccount}
        onChange={(e) => setBankAccount(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '80%' }}
      />
      <br />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '80%' }}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '80%' }}
      />
      <br />
      <button onClick={handleRegister} style={{ padding: '10px 20px', margin: '10px' }}>
        Register
      </button>
      <br />
      <Link to="/user-login">
        <button style={{ padding: '10px 20px', margin: '10px' }}>Back to Login</button>
      </Link>
    </div>
  );
}

export default UserRegistration;