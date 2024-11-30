import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import { AdminNavi } from './admin/AdminNavi';
import { AdminHome } from './admin/AdminHome';
import { AdminTrans } from './admin/AdminTrans';
import { CreateUser } from './admin/CreateUser';
import { DispUsers } from './admin/DispUsers';
import { DeleteUser } from './admin/DeleteUser';
import { EditUser } from './admin/EditUser';
import { SearchUser } from './admin/SearchUser';


function App() {

  const [users, setUsers] = useState([
    {
      username: "user1",
      mobileNumber: "09123456789",
      email: "user1@gmail.com"
    }
  ]);
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminNavi />}>
        <Route index element={<AdminHome />} />
        <Route path='users' element={<DispUsers users={users} />} />
        <Route path='transactions' element={<AdminTrans />} />
        <Route path='create' element={<CreateUser setUsers={setUsers} />} />
        <Route path='delete' element={<DeleteUser users={users} setUsers={setUsers} />} />
        <Route path='edit' element={<EditUser users={users} setUsers={setUsers} />} />
        <Route path='search' element={<SearchUser users={users} />} />
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
