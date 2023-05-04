import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Details from './pages/Details/Details';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Signup from './pages/Signup/Signup';
import Mypage from './pages/Mypage/Mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
        {/* <Route path="/books/:id" element={<Details />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
