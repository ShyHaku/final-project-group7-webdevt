import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './user/NavigationBar';
import './App.css';
import TransactionPage from './user/transactions'; 
import TransactionHistory from './user/TransactionHistory'; 
import TransactionForm from './user/TransactionForm';
import ContactPage from './user/ContactUser';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleTransfer = (sender, recipient, amount) => {
    if (!sender || !recipient || !amount) {
      setError('All fields are required.');
      return;
    }
    
    const newTransaction = {
      sender,
      recipient,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };
    
    setTransactions([...transactions, newTransaction]);
    setSender('');
    setRecipient('');
    setAmount('');
    setError(''); 
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<h1>Welcome to Alabank!</h1>} />
        <Route 
          path="/transaction"element={<TransactionPage onTransfer={handleTransfer}/>} />
        <Route path="/transactionhistory"element={<TransactionHistory transactions={transactions} />}/>
        <Route 
          path="/transactionform" 
          element={
            <TransactionForm 
              onTransfer={handleTransfer} 
              error={error}
              sender={sender}
              setSender={setSender}
              recipient={recipient}
              setRecipient={setRecipient}
              amount={amount}
              setAmount={setAmount}
            />
          } 
        />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
};

export default App;