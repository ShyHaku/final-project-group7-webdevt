import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './user/NavigationBar';
import TransactionPage from './user/transactions';
import TransactionHistory from './user/TransactionHistory'; 
import ContactPage from './user/ContactUser'; 
import TransactionForm from './user/TransactionForm';
import TransferConfirmation from './user/TransferConfirmation';
import './App.css'

const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [currentTransfer, setCurrentTransfer] = useState(null); // To hold current transfer details
    const [error, setError] = useState('');

    const handleTransfer = (sender, recipient, amount) => {
        const newTransaction = {
            sender,
            recipient,
            amount: parseFloat(amount),
            date: new Date().toISOString(),
        };

        setTransactions([...transactions, newTransaction]);
        setError(''); 
    };

    const handleEditTransfer = (transfer) => {
        setCurrentTransfer(transfer);
    };

    const handleConfirmTransfer = (sender, recipient, amount) => {
        handleTransfer(sender, recipient, amount);
        setCurrentTransfer(null); // Reset current transfer after confirming
    };

    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<h1>Welcome to Alabank!</h1>} />
                <Route 
                    path="/transaction" 
                    element={<TransactionPage onTransfer={handleTransfer} error={error} setError={setError} />} 
                />
                <Route 
                    path="/transactionform" 
                    element={
                        <TransactionForm 
                            onEditTransfer={handleEditTransfer} 
                            error={error} 
                            setError={setError} 
                        />} 
                />
                <Route 
                    path="/transactionhistory" 
                    element={<TransactionHistory transactions={transactions} />} 
                />
                <Route path="/contact" element={<ContactPage />} />
                <Route 
                    path="/transfer-confirmation" 
                    element={
                        <TransferConfirmation 
                            initialTransfer={currentTransfer} 
                            onConfirm={handleConfirmTransfer} 
                        />
                    } 
                />
            </Routes>
        </Router>
    );
};

export default App;