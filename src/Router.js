import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Shop from './pages/Shop/Shop';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Nav" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
