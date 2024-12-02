import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import UserLogin from './Pages/UserLogin';
import AdminLogin from './Pages/AdminLogin';
import UserRegistration from './Pages/UserRegistration';
import './styles.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/register" element={<UserRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
