import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/main';
import Login from './pages/login/login';
import Details from './pages/details/details';
import Basket from './pages/basket/basket';
import Payment from './pages/payment/payment';
import Signup from './pages/signup/signup';
import Mypage from './pages/mypage/mypage';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
