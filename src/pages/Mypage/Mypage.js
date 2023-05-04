import React, { useState } from 'react';
import MypageTop from './components/MypageTop';
import UserInfoUpdate from './components/UserInfoUpdate';
import MenuBar from './components/MenuBar';
import OrderDelivery from './components/OrderDelivery';
import Subscribes from './components/Subscribes';
import Likes from './components/Likes';
import './Mypage.scss';

const Mypage = () => {
  const [info, setInfo] = useState({
    email: 'abc@gmail.com',
    password: '',
    password_re: '',
    name: '박현아',
    address: '',
    phone_number: '',
    birth_date: '0000-00-00',
  });

  return (
    <div className="mypage">
      <MypageTop />
      <div className="mypage-main">
        <div className="main-left">
          <div className="text-2xl">마이페이지</div>
          <MenuBar />
        </div>
        <div className="main-right">
          {/* 함수구현으로 보여주는 컴포넌트 변경예정 */}
          <UserInfoUpdate info={info} />
          <OrderDelivery />
          <Subscribes />
          <Likes />
        </div>
      </div>
    </div>
  );
};
export default Mypage;
