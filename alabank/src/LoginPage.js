import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginPage = ({ setUserRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded login logic
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
    <div style={{ textAlign: 'center', paddingLeft: 325, paddingRight: 325 }}>
      <h1 style={{ paddingTop: 80 }}>Login</h1>

      {/* Username Input */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          margin: '10px',
          padding: '10px',
          width: '80%',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <br />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          margin: '10px',
          padding: '10px',
          width: '80%',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <br />

      {/* Error Message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Login Button */}
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          margin: '10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Login
      </button>
      <br />

      {/* Register and Back Buttons */}
      <Link to="/register">
        <button
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Register
        </button>
      </Link>
      <br />
      <Link to="/">
        <button
          style={{
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Back to Homepage
        </button>
      </Link>
    </div>
  );
};

export default LoginPage;
