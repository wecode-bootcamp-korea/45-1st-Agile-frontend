import React, { useState } from 'react';
import MypageTop from './components/MypageTop';
import MenuBar from './components/MenuBar';
import OrderDelivery from './components/OrderDelivery';
import Subscribes from './components/Subscribes';
import Likes from './components/Likes';
import './Mypage.scss';

const Mypage = () => {
  const [isOpen, setIsOpen] = useState(1);

  return (
    <div className="mypage">
      <MypageTop />
      <div className="mypage-main">
        <div className="main-left">
          <div className="text-2xl">마이페이지</div>
          <MenuBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="main-right">
          {isOpen === 1 && <OrderDelivery />}
          {isOpen === 2 && <Subscribes />}
          {isOpen === 3 && <Likes />}
        </div>
      </div>
    </div>
  );
};
export default Mypage;
