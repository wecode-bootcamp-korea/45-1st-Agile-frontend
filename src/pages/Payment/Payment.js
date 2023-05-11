import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderList from './components/OrderList'; //주문제품
import Orderer from './components/Orderer'; //주문자 정보
import Shipment from './components/Shipment'; //배송 정보
import Subscribe from './components/Subscribe'; //정기배송 시작일
import PaymentMethod from './components/PaymentMethod'; //결제수단
import PaymentInfo from './components/PaymentInfo'; //결제정보
import InvalidAccess from './InvalidAccess';
import './Payment.scss';

const cartId = [];
// const mode = false;
// const subtot = 0;
// const total = 0;

const Payment = () => {
  console.log('>>>>>', subDate());
  const navigate = useNavigate();
  const location = useLocation();

  const [userInfo, setUserInfo] = useState({});
  const [orderInfo, setOrderInfo] = useState([]);
  const [orderMode, setOrderMode] = useState({});
  const [radio, setRadio] = useState(true);
  const [info, setInfo] = useState({});
  const [checkItems, setCheckItems] = useState([]);

  const handleInfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const { productsInfo } = location.state;
  console.log(1);

  //고객정보 불러오기
  useEffect(() => {
    console.log(2);
    fetch('http://10.58.52.241:3000/users', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const user = data.user;
        setUserInfo(user);
        console.log(user);
        setInfo({
          name: user.name,
          phoneNumber: user.phoneNumber,
          email: user.email,
          address: user.address,
          receiver_name: user.name,
          receiver_phoneNumber: user.phoneNumber,
          receiver_address: user.address,
          subscribeStart: subDate(),
        });
      });
    console.log('pro', productsInfo);
    setOrderMode(productsInfo);

    // console.log('mode', mode);
    // console.log('data', data);
    setOrderInfo(productsInfo.data);
    if (orderMode.mode) cartId = productsInfo.cartIds;
    console.log('bbb', cartId);
    // setOrderInfo(productsInfo); //주문제품정보 설정
  }, []);

  //라디오변경으로 고객정보 변경
  const switchRadio = () => {
    for (let key in info) {
      if (key.includes('receiver')) {
        if (radio) {
          info[key] = '';
        } else {
          info[key] = userInfo[key.slice(9)];
        }
      }
    }
  };

  const handlePayButton = () => {
    if (checkItems < 2) {
      alert('모든 약관에 동의해주세요.');
      return;
    }
    if (point.remainPoint < 0) {
      alert('포인트가 부족합니다.');
      navigate('/invalidAccess');
      return;
    }

    console.log('3333333', productsInfo.data.subscribeCycle);
    console.log('22222221', orderInfo[0]);
    // 상세 -> 결제
    if (!orderMode.mode) {
      console.log('상세 -> 결제');

      console.log('dddd', orderInfo[0].bookId);
      fetch('http://10.58.52.241:3000/orders/direct', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          address: info.receiver_address,
          subscribeDeliveryTime: info.subscribeStart,
          bookId: orderInfo[0]?.bookId,
          quantity: orderInfo[0]?.quauntity,
          subscribeCycle: productsInfo.data.subscribeCycle,
          // price: productsInfo.totalPrice,
        }),
      })
        .then(res => res.json())
        .then(res => {
          const { message, data } = res;
          console.log('finish');
          console.log(data);
          console.log(res);

          navigate('/orderCompleted', {
            state: {
              orderNumber: data.orderNumber,
              price: point.usePoint,
            },
          });
        });
    }

    ////////////////////////////////////////////////////////////////////////

    // 장바구니 -> 결제
    else {
      console.log('장바구니 -> 결제');
      console.log('qqqqq', cartId);
      fetch('http://10.58.52.241:3000/orders', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          address: info.receiver_address,
          subscribeDeliveryTime: info.subscribeStart,
          cartIds: productsInfo.cartIds,
          subscribeCycle: productsInfo.subscribeCycle,
        }),
      })
        .then(res => res.json())
        .then(res => {
          const { message, data } = res;

          console.log('finish');
          console.log(res);

          navigate('/orderCompleted', {
            state: {
              orderNumber: data.orderNumber,
              price: point.usePoint,
            },
          });
        });
    }
  };
  // function delay(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  if (orderMode === {}) return;

  let totalPrice = 0;
  let fee = 0;
  let usePoint = 0;
  let earnPoint = 0;
  let remainPoint = 0;

  const point = {
    curPoint: parseInt(userInfo?.points),
    usePoint: orderMode.totalPrice,
    earnPoint: orderMode.totalPrice >= 70000 ? orderMode.totalPrice * 0.02 : 0,
    remainPoint: parseInt(userInfo?.points) - orderMode.totalPrice,
    price: orderMode.subtotal,
    shipmentFee: orderMode.totalPrice < 40000 ? 3000 : 0,
  };
  console.log('point', point);

  // //실험용 GET
  // useEffect(() => {
  //   fetch('/data/orderItemsData.json', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: localStorage.getItem('token'),
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //   })
  //     .then(res => res.json())
  //     // .catch(e => navigate('/invalidAccess'))
  //     .then(data => {
  //       console.log(data);
  //       setOrderInfo(data);
  //       data.forEach(ele => cartIds.push(ele.cartId));
  //     });
  // }, []);

  //token 없을때 예외처리
  if (!localStorage.getItem('token')) return <InvalidAccess />;
  return (
    <div className="payment">
      <div className="order-sheet">
        <p className="text-2xl">주문서</p>
      </div>

      <OrderList orderInfo={orderInfo} />
      <Orderer info={info} handleInfo={handleInfo} />
      <Shipment
        info={info}
        handleInfo={handleInfo}
        setRadio={setRadio}
        radio={radio}
        switchRadio={switchRadio}
      />
      {orderInfo[0]?.isSubscribe && (
        <Subscribe info={info} handleInfo={handleInfo} />
      )}
      <div className="pay-part">
        <PaymentMethod
          point={point}
          checkItems={checkItems}
          setCheckItems={setCheckItems}
        />
        <PaymentInfo point={point} />
      </div>
      <div className="pay">
        <button className="pay-button" onClick={handlePayButton}>
          결제하기
        </button>
      </div>
    </div>
  );
};
export default Payment;

const subDate = () => {
  const now = new Date();

  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate() + 1; //next day

  if (month < 10) {
    month = '0' + String(month);
  }
  if (day < 10) {
    day = '0' + String(day);
  }

  const date = year + '-' + month + '-' + day;
  return date;
};
