import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Details from './pages/Details/Details';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Signup from './pages/Signup/Signup';
import Mypage from './pages/Mypage/Mypage';
import UserInfoUpdate from './pages/Mypage/components/UserInfoUpdate';
import ConfirmPassword from './pages/Mypage/components/ConfirmPassword';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/userInfoUpdate" element={<UserInfoUpdate />} />
        <Route path="/confirmPassword" element={<ConfirmPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
