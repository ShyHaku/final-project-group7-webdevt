import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Our Bank</h1>
      <p>Manage your finances easily and securely.</p>
      <div className="buttons">
        <Link to="/user-login">
          <button className="btn">User Login</button>
        </Link>
        <Link to="/admin-login">
          <button className="btn">Admin Login</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;