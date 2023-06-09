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
import ProductList from './pages/ProductList/ProductList';
import InvalidAccess from './pages/Payment/InvalidAccess';
import OrderCompleted from './pages/Payment/OrderCompleted';
import UserInfoUpdate from './pages/Mypage/components/UserInfoUpdate';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/books/:id" element={<Details />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/orderCompleted" element={<OrderCompleted />} />
        <Route path="/userInfoUpdate" element={<UserInfoUpdate />} />
        <Route path="*" element={<InvalidAccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
