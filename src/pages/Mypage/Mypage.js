import React from 'react';
import MypageTop from './components/MypageTop';
import MenuBar from './components/MenuBar';
import OrderDelivery from './components/OrderDelivery';
import Subscribe from './components/Subscribe';
import Likes from './components/Likes';
import './Mypage.scss';

const Mypage = () => {
  return (
    <div className="mypage">
      <MypageTop />
      <div className="mypage-main">
        <div className="main-left">
          <div className="text-2xl">마이페이지</div>
          <MenuBar />
        </div>
        <div className="main-right">
          <OrderDelivery />
          <Subscribe />
          <Likes />
        </div>
      </div>
    </div>
  );
};
export default Mypage;
