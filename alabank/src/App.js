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

import { AdminNavi } from './admin/AdminNavi';
import { AdminHome } from './admin/AdminHome';
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

const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [currentTransfer, setCurrentTransfer] = useState(null);
    const [error, setError] = useState('');
    const [balance, setBalance] = useState(30000);

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

    // Admin state
    const [users, setUsers] = useState([
        { username: "user1", mobileNumber: "09123456789", email: "user1@gmail.com" }
    ]);

    const [newUsersArr, setNewUsersArr] = useState([
        { username: "user2", bankAccNo: "9876", mobileNumber: "09123456789", email: "user2@gmail.com", status: "Not Yet Verified" }
    ]);

    const [newBankArr, setNewBankArr] = useState([
        { username: "juanDC", name: "Juan Dela Cruz", address: "Lipa City", mobileNumber: "09123456789", email: "juanDC@gmail.com", status: "Not Yet Verified" }
    ]);

    const [msgsArr, setMsgsArr] = useState([
        { username: "user1", email: "user1@gmail.com", msg: "What are your customer support hours, and how can I reach you?" }
    ]);

    return (
        <Router>
            {/* User Routes */}
            <NavigationBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/transaction" element={<TransactionPage onTransfer={handleTransfer} error={error} setError={setError} />} />
                <Route path="/transactionform" element={<TransactionForm onEditTransfer={handleEditTransfer} error={error} setError={setError} setCurrentTransfer={setCurrentTransfer} />} />
                <Route path="/transactionhistory" element={<TransactionHistory transactions={transactions} />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/transfer-confirmation" element={<TransferConfirmation initialTransfer={currentTransfer} onConfirm={handleConfirmTransfer} balance={balance} />} />
                <Route path="/balance" element={<Balance transactions={transactions} defaultBalance={balance} />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>

            {/* Admin Routes */}
            <Routes>
                <Route path="/" element={<AdminNavi />}>
                    <Route path="admin" element={<AdminHome />} />
                    <Route path="users" element={<DispUsers users={users} />} />
                    <Route path="transactions" element={<AdminTrans />} />
                    <Route path="create" element={<CreateUser setUsers={setUsers} />} />
                    <Route path="delete" element={<DeleteUser users={users} setUsers={setUsers} />} />
                    <Route path="edit" element={<EditUser users={users} setUsers={setUsers} />} />
                    <Route path="search" element={<SearchUser users={users} />} />
                    <Route path="filter" element={<AdminFilter />} />
                    <Route path="filter/byDate" element={<AdFilterByDate />} />
                    <Route path="filter/byRef" element={<AdFilterByRef />} />
                    <Route path="filter/byAmount" element={<AdFilterByAmount />} />
                    <Route path="new" element={<NewAccounts />} />
                    <Route path="new/userAccounts" element={<NewUsers setUsers={setUsers} newUsersArr={newUsersArr} setNewUsersArr={setNewUsersArr} />} />
                    <Route path="new/bankAccounts" element={<NewBankAcc newBankArr={newBankArr} setNewBankArr={setNewBankArr} />} />
                    <Route path="messages" element={<AdminMsgs msgsArr={msgsArr} setMsgsArr={setMsgsArr} />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
