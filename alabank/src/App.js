import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './user/NavigationBar';
import TransactionPage from './user/transactions';
import TransactionHistory from './user/TransactionHistory'; 
import ContactPage from './user/ContactUser'; 
import TransactionForm from './user/TransactionForm';
import TransferConfirmation from './user/TransferConfirmation';
import Balance from './user/Balance';
import HomePage from './user/homepage';
import './App.css';

const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [currentTransfer, setCurrentTransfer] = useState(null);
    const [error, setError] = useState('');
    const [balance, setBalance] = useState(30000);

    
    const handleTransfer = (sender, recipient, amount, recipientAccountNo) => {
        const newTransaction = {
            sender,
            recipient,
            amount: parseFloat(amount), // Ensure it's a valid number
            date: new Date().toISOString(),
            referenceNo: Math.random().toString(36).substring(2, 15),
            recipientAccountNo,
        };

        setTransactions([...transactions, newTransaction]);
        setError('');
    };

    const handleEditTransfer = (transfer) => {
        setCurrentTransfer(transfer);
    };

    const handleConfirmTransfer = (sender, recipient, amount, recipientAccountNo) => {
        const parsedAmount = parseFloat(amount); 
        
        // Check if the balance is sufficient for the transfer
        if (balance < parsedAmount) {
            setError('Insufficient funds for this transfer.');
            return;
        }

        // Proceed with the transaction
        handleTransfer(sender, recipient, parsedAmount, recipientAccountNo);

        // Update the balance correctly
        setBalance((prevBalance) => {
            const newBalance = prevBalance - parsedAmount;
            return newBalance >= 0 ? newBalance : 0;
        });

        // Reset current transfer after a successful confirmation
        setCurrentTransfer(null);
    };

    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route 
                    path="/" 
                    element={ 
                        <HomePage
                        />
                    } 
                />
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
                            setCurrentTransfer={setCurrentTransfer} 
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
                            balance={balance}
                        />
                    } 
                />
                <Route path="/balance" element={<Balance transactions={transactions} defaultBalance={balance} />} />
                <Route path="/home" element={<HomePage/>}/>
            </Routes>
        </Router>
    );
};

export default App;
