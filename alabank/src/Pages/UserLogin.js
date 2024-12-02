import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>User Login</h1>
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
      <button onClick={handleLogin} style={{ padding: '10px 20px', margin: '10px' }}>
        Login
      </button>
      <br />
      <Link to="/register">
        <button style={{ padding: '10px 20px', margin: '10px' }}>Register</button>
      </Link>
      <br />
      <Link to="/">
        <button style={{ padding: '10px 20px', margin: '10px' }}>Back to Homepage</button>
      </Link>
    </div>
  );
}

export default UserLogin;