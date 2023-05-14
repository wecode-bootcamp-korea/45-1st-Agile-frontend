import React, { useEffect, useState } from 'react';
import MypageTop from './components/MypageTop';
import MenuBar from './components/MenuBar';
import OrderDelivery from './components/OrderDelivery';
import OrderStatus from './components/OrderStatus';
import Subscribes from './components/Subscribes';
import Likes from './components/Likes';
import ConfirmPassword from './components/ConfirmPassword';
import Mainlayout from '../../pages/Details/Mainlayout';
import './Mypage.scss';
import TitleLine from '../../components/TitleLine/TitleLine';

const Mypage = () => {
  const [modal, setModal] = useState(false); //정보수정 비밀번호 확인 모달창
  const [menuMode, setMenuMode] = useState(0); //메뉴바 바꾸기
  const [userInfo, setUserInfo] = useState({}); //사용자 정보
  const [orderStatus, setOrderStatus] = useState({}); // 주문배송 현황
  const [dataStatus, setDataStatus] = useState([]); // 주문배송물품 현황
  const menuList = {
    0: <OrderDelivery setMenuMode={setMenuMode} orderStatus={orderStatus} />, //주문배송 현황
    1: <OrderStatus dataStatus={dataStatus} />, //주문배송 조회
    2: <Subscribes />, //정기구독 관리
    3: <Likes />, //관심 상품
  };

  //고객정보 불러오기
  useEffect(() => {
    fetch('http://10.58.52.241:3000/users', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
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
  }, []);

  // 주문배송현황 불러오기
  useEffect(() => {
    fetch('http://10.58.52.241:3000/orders', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(res => {
        const { orderStatus, data } = res;
        setOrderStatus(orderStatus);
        setDataStatus(data);
      });
  }, []);

  return (
    <Mainlayout>
      <TitleLine />
      {modal && <div className="background" />}
      {modal && <ConfirmPassword modal={modal} setModal={setModal} />}
      <div className="mypage">
        <MypageTop userInfo={userInfo} setModal={setModal} />
        <div className="mypage-main">
          <div className="main-left">
            <div className="text-2xl">마이페이지</div>
            <MenuBar menuMode={menuMode} setMenuMode={setMenuMode} />
          </div>
          <div className="main-right">{menuList[menuMode]}</div>
        </div>
      </div>
    </Mainlayout>
  );
};
export default Mypage;
