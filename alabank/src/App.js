import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './user/NavigationBar';
import './App.css';
import TransactionPage from './user/transactions'; 
import TransactionHistory from './user/TransactionHistory'; 
import TransactionForm from './user/TransactionForm';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<h1>Welcome to Alabank!</h1>} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/transactionhistory" element={<TransactionHistory />} />
        <Route path="/transactionform" element={<TransactionForm/>} />
      </Routes>
    </Router>
  );
};

export default App;