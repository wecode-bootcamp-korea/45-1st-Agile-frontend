import React, { useEffect, useState } from 'react';
import MypageTop from './components/MypageTop';
import MenuBar from './components/MenuBar';
import OrderDelivery from './components/OrderDelivery';
import Subscribes from './components/Subscribes';
import Likes from './components/Likes';
import ConfirmPassword from './components/ConfirmPassword';
import './Mypage.scss';

const Mypage = () => {
  const [modal, setModal] = useState(false);
  const [menuMode, setMenuMode] = useState(1);
  const [userInfo, setUserInfo] = useState({});
  const menuList = {
    1: <OrderDelivery />,
    2: <Subscribes />,
    3: <Likes />,
  };

  useEffect(() => {
    fetch('http://10.58.52.241:3000/users', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNjM4NDA0fQ.9AnFo7VZuBaLGv9jSTIq3XFd5PBZOKQpUchEfWzAT80',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        const user = data.user;
        setUserInfo({
          name: user.name,
          point: user.points,
          phoneNumber: user.phoneNumber,
        });
      });

    // fetch('/data/userData_mypage.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     const user = data.user;
    //     setUserInfo({
    //       name: user.name,
    //       point: user.points,
    //       phoneNumber: user.phoneNumber,
    //     });
    //   });
  }, []);

  return (
    <div className="mypage">
      {modal && <div className="background" />}
      {modal && <ConfirmPassword />}
      <MypageTop userInfo={userInfo} modal={modal} setModal={setModal} />
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
