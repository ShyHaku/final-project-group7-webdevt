import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const AdminLogin = () => {
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAdminSubmit = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const validAdminUsername = 'admin';
    const validAdminPassword = 'admin 123';

    if (adminUsername === validAdminUsername && adminPassword === validAdminPassword) {
      // Clear any previous error messages
      setErrorMessage('');
      alert('Admin login successful!');
      // Navigate to the admin dashboard or perform any other action
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleAdminSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={adminUsername}
          onChange={(e) => setAdminUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={adminPassword}
          onChange={(e) => setAdminPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn">Login</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <Link to="/">
        <button className="btn">Back to Homepage</button>
      </Link>
    </div>
  );
};

export default AdminLogin;
