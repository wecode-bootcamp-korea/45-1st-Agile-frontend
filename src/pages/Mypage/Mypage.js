import React, { useEffect, useState } from 'react';
import MypageTop from './components/MypageTop';
import MenuBar from './components/MenuBar';
import OrderDelivery from './components/OrderDelivery';
import Subscribes from './components/Subscribes';
import Likes from './components/Likes';
import './Mypage.scss';

const Mypage = () => {
  const [menuMode, setMenuMode] = useState(3);
  const [userInfo, setUserInfo] = useState({});
  const menuList = {
    1: <OrderDelivery />,
    2: <Subscribes />,
    3: <Likes />,
  };

  useEffect(() => {
    fetch('/data/userData_mypage.json')
      .then(res => res.json())
      .then(data => {
        const user = data.user;
        setUserInfo({
          name: user.name,
          point: user.points,
          phoneNumber: user.phoneNumber,
        });
      });
  }, []);

  return (
    <div className="mypage">
      <MypageTop userInfo={userInfo} />
      <div className="mypage-main">
        <div className="main-left">
          <div className="text-2xl">마이페이지</div>
          <MenuBar menuMode={menuMode} setMenuMode={setMenuMode} />
        </div>
        <div className="main-right">{menuList[menuMode]}</div>
      </div>
    </div>
  );
};
export default Mypage;
