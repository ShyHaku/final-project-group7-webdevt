import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';

import HomePage from './Pages/HomePage';
import UserLogin from './Pages/UserLogin';
import AdminLogin from './Pages/AdminLogin';
import UserRegistration from './Pages/UserRegistration';
import './styles.css';

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
              <Route path='admin/users' element={<DispUsers users={users} />} />
              <Route path='admin/transactions' element={<AdminTrans />} />
              <Route path='admin/create' element={<CreateUser setUsers={setUsers} />} />
              <Route path='admin/delete' element={<DeleteUser users={users} setUsers={setUsers} />} />
              <Route path='admin/edit' element={<EditUser users={users} setUsers={setUsers} />} />
              <Route path='admin/search' element={<SearchUser users={users} />} />
              
              <Route path='admin/filter' element={<AdminFilter />} />
              <Route path='admin/filter/byDate' element={<AdFilterByDate />} />
              <Route path='admin/filter/byRef' element={<AdFilterByRef />} />
              <Route path='admin/filter/byAmount' element={<AdFilterByAmount />} />   
              
              <Route path='admin/new' element={<NewAccounts />} />
              <Route path='admin/new/userAccounts' element={<NewUsers setUsers={setUsers} newUsersArr={newUsersArr} setNewUsersArr={setNewUsersArr} />} />
              <Route path='admin/new/bankAccounts' element={<NewBankAcc newBankArr={newBankArr} setNewBankArr={setNewBankArr} />} />

              <Route path='admin/messages' element={<AdminMsgs msgsArr={msgsArr} setMsgsArr={setMsgsArr} />} />
            </Route>

        </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
