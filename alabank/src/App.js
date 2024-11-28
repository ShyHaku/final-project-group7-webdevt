import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import { AdminNavi } from './admin/AdminNavi';
import { AdminHome } from './admin/AdminHome';
import { Users } from './admin/Users';
import { AdminTrans } from './admin/AdminTrans';
import { CreateUser } from './admin/CreateUser';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminNavi />}>
        <Route index element={<AdminHome />} />
        <Route path='users' element={<Users />} />
        <Route path='transactions' element={<AdminTrans />} />
        <Route path='create' element={<CreateUser />} />
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
