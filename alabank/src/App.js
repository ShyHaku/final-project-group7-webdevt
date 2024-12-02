import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.js';
import NavigationBar from './user/NavigationBar';
import AdminNavi from './admin/AdminNavi';
import TransactionPage from './user/transactions';
import TransactionHistory from './user/TransactionHistory'; 
import ContactPage from './user/ContactUser'; 
import TransactionForm from './user/TransactionForm';
import TransferConfirmation from './user/TransferConfirmation';
import Balance from './user/Balance';
import HomePage from './user/homepage';
import { AdminHome } from './admin/adminHome';
import { AdminTrans } from './admin/AdminTrans';
import { CreateUser } from './admin/CreateUser';
import { DispUsers } from './admin/DispUsers';
import { DeleteUser } from './admin/DeleteUser';
import { EditUser } from './admin/EditUser';
import { SearchUser } from './admin/SearchUser';
import { AdminFilter } from './admin/AdminFilter';
import { NewAccounts } from './admin/NewAccounts';
import { NewUsers } from './admin/new/NewUsers';
import { AdFilterByAmount } from './admin/filter/ByAmount';
import { AdFilterByRef } from './admin/filter/ByRef';
import { AdFilterByDate } from './admin/filter/ByDate';
import { NewBankAcc } from './admin/new/NewBankAcc';
import { AdminMsgs } from './admin/AdminMsgs';
import LoginPage from './LoginPage';

const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [currentTransfer, setCurrentTransfer] = useState(null);
    const [error, setError] = useState('');
    const [balance, setBalance] = useState(30000);
    const [userRole, setUserRole] = useState(null); // Track the user's role ('user' or 'admin')

    // User-related transfer functions
    const handleTransfer = (sender, recipient, amount, recipientAccountNo) => {
        const newTransaction = {
            sender,
            recipient,
            amount: parseFloat(amount),
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

        if (balance < parsedAmount) {
            setError('Insufficient funds for this transfer.');
            return;
        }

        handleTransfer(sender, recipient, parsedAmount, recipientAccountNo);

        setBalance((prevBalance) => {
            const newBalance = prevBalance - parsedAmount;
            return newBalance >= 0 ? newBalance : 0;
        });

        setCurrentTransfer(null);
    };

    return (
        <Router>
            {/* Login Route */}
            <Routes>
                <Route path="/" element={<LoginPage setUserRole={setUserRole} />} />
            </Routes>

            {/* Conditionally Render Navbar based on userRole */}
            {userRole === 'admin' ? <AdminNavi /> : userRole === 'user' && <NavigationBar />}

            {/* Conditionally render routes based on userRole */}
            <Routes>
                {/* User Routes */}
                {userRole === 'user' && (
                    <>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/transaction" element={<TransactionPage onTransfer={handleTransfer} error={error} setError={setError} />} />
                        <Route path="/transactionform" element={<TransactionForm onEditTransfer={handleEditTransfer} error={error} setError={setError} setCurrentTransfer={setCurrentTransfer} />} />
                        <Route path="/transactionhistory" element={<TransactionHistory transactions={transactions} />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/transfer-confirmation" element={<TransferConfirmation initialTransfer={currentTransfer} onConfirm={handleConfirmTransfer} balance={balance} />} />
                        <Route path="/balance" element={<Balance transactions={transactions} defaultBalance={balance} />} />
                    </>
                )}

                {/* Admin Routes */}
                {userRole === 'admin' && (
                    <>
                        <Route path="/admin" element={<AdminHome />} />
                        <Route path="/admin/users" element={<DispUsers />} />
                        <Route path="/admin/transactions" element={<AdminTrans />} />
                        <Route path="/admin/create" element={<CreateUser />} />
                        <Route path="/admin/delete" element={<DeleteUser />} />
                        <Route path="/admin/edit" element={<EditUser />} />
                        <Route path="/admin/search" element={<SearchUser />} />
                        <Route path="/admin/filter" element={<AdminFilter />} />
                        <Route path="/admin/filter/byDate" element={<AdFilterByDate />} />
                        <Route path="/admin/filter/byRef" element={<AdFilterByRef />} />
                        <Route path="/admin/filter/byAmount" element={<AdFilterByAmount />} />
                        <Route path="/admin/new" element={<NewAccounts />} />
                        <Route path="/admin/new/userAccounts" element={<NewUsers />} />
                        <Route path="/admin/new/bankAccounts" element={<NewBankAcc />} />
                        <Route path="/admin/messages" element={<AdminMsgs />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default App;
