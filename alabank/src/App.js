import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

import HomePage from './Pages/HomePage';
import UserLogin from './Pages/UserLogin';
import AdminLogin from './Pages/AdminLogin';
import UserRegistration from './Pages/UserRegistration';

import { AdminNavi } from './Admin/AdminNavi';
import { AdminTrans } from './Admin/AdminTrans';
import { CreateUser } from './Admin/CreateUser';
import { DispUsers } from './Admin/DispUsers';
import { DeleteUser } from './Admin/DeleteUser';
import { EditUser } from './Admin/EditUser';
import { SearchUser } from './Admin/SearchUser';
import { AdminFilter } from './Admin/AdminFilter';
import { NewAccounts } from './Admin/NewAccounts';
import { NewUsers } from './Admin/New/NewUsers';
import { AdFilterByAmount } from './Admin/Filter/ByAmount';
import { AdFilterByRef } from './Admin/Filter/ByRef';
import { AdFilterByDate } from './Admin/Filter/ByDate';
import { NewBankAcc } from './Admin/New/NewBankAcc';
import { AdminMsgs } from './Admin/AdminMsgs';
import { AdminHome } from './Admin/AdminHome';

function App() {

  const [users, setUsers] = useState([
    {
      username: "user1",
      mobileNumber: "09123456789",
      email: "user1@gmail.com"
    }
  ]);

  const [newUsersArr, setNewUsersArr] = useState([
    {
        username: "user2",
        bankAccNo: "9876",
        mobileNumber: "09123456789",
        email: "user2@gmail.com",
        status: "Not Yet Verified"
    }
]);

const [newBankArr, setNewBankArr] = useState([
  {
      username: "juanDC",
      name: "Juan Dela Cruz",
      address: "Lipa City",
      mobileNumber: "09123456789",
      email: "juanDC@gmail.com",
      status: "Not Yet Verified"
  }
]);

const [msgsArr, setMsgsArr] = useState([
  {
      username: "user1",
      email: "user1@gmail.com",
      msg: "What are your customer support hours, and how can I reach you?"
  }
]);
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/register" element={<UserRegistration />} />

            <Route path='admin' element={<AdminNavi />}>
              <Route index element={<AdminHome />} />
              <Route path='users' element={<DispUsers users={users} />} />
              <Route path='transactions' element={<AdminTrans />} />
              <Route path='create' element={<CreateUser setUsers={setUsers} />} />
              <Route path='delete' element={<DeleteUser users={users} setUsers={setUsers} />} />
              <Route path='edit' element={<EditUser users={users} setUsers={setUsers} />} />
              <Route path='search' element={<SearchUser users={users} />} />
              
              <Route path='filter' element={<AdminFilter />} />
              <Route path='filter/byDate' element={<AdFilterByDate />} />
              <Route path='filter/byRef' element={<AdFilterByRef />} />
              <Route path='filter/byAmount' element={<AdFilterByAmount />} />   
              
              <Route path='new' element={<NewAccounts />} />
              <Route path='new/userAccounts' element={<NewUsers setUsers={setUsers} newUsersArr={newUsersArr} setNewUsersArr={setNewUsersArr} />} />
              <Route path='new/bankAccounts' element={<NewBankAcc newBankArr={newBankArr} setNewBankArr={setNewBankArr} />} />

              <Route path='messages' element={<AdminMsgs msgsArr={msgsArr} setMsgsArr={setMsgsArr} />} />
            </Route>

        </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
