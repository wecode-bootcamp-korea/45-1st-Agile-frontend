import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderList from './components/OrderList'; //주문제품
import Orderer from './components/Orderer'; //주문자 정보
import Shipment from './components/Shipment'; //배송 정보
import Subscribe from './components/Subscribe'; //정기배송 시작일
import PaymentMethod from './components/PaymentMethod'; //결제수단
import PaymentInfo from './components/PaymentInfo'; //결제정보
import './Payment.scss';

const flag = false;
const cartIds = [];
const mode = false;

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userInfo, setUserInfo] = useState({});
  const [orderInfo, setOrderInfo] = useState([]);
  const [radio, setRadio] = useState(true);
  const [info, setInfo] = useState({});

  const handleInfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  // const { productsInfo } = location.state;

  //고객정보 불러오기
  useEffect(() => {
    fetch('http://10.58.52.196:3000/users', {
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
    // setOrderInfo(productsInfo); //주문제품정보 설정
  }, []);

  const handlePayButton = () => {
    if (point.remainPoint < 0) {
      alert('포인트가 부족합니다.');
      navigate('/invalidAccess');
      return;
    }

    // 상세 -> 결제
    if (!mode) {
      fetch('http://10.58.52.196:3000/orders/direct', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          address: info.receiver_address,
          subscribeDeliveryTime: info.subscribeStart,
          bookId: orderInfo[0].bookId,
          quantity: orderInfo[0].quantity,
        }),
      })
        .then(res => res.json())
        .then(res => {
          const { message, data } = res;
          console.log('finish');
          console.log(data);
          // flag = true;

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
      fetch('http://10.58.52.196:3000/orders', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          address: info.receiver_address,
          subscribeDeliveryTime: info.subscribeStart,
          cartIds: cartIds,
        }),
      })
        .then(res => res.json())
        .then(res => {
          const { message, data } = res;

          console.log('finish');
          console.log(data);
          // flag = true;

          navigate('/orderCompleted', {
            state: {
              orderNumber: data.orderNumber,
              price: point.usePoint,
            },
          });
        });
    }

    // if (flag) {
    // navigate('/orderCompleted', {
    //   state: {
    //     orderNumber: '123',
    //     price: point.usePoint,
    //   },
    // });
    // }
  };

  //실험용 GET
  useEffect(() => {
    fetch('/data/orderItemsData.json', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOrderInfo(data);
        data.forEach(ele => cartIds.push(ele.cartId));
      });
  }, []);

  // point 설정하기
  if (orderInfo === []) return null;

  let totalPrice = 0;
  orderInfo?.forEach(ele => {
    totalPrice += ele.price * ele.quantity;
  });
  const fee = totalPrice < 40000 ? 3000 : 0;
  const usePoint = parseInt(totalPrice + fee);
  const earnPoint = totalPrice >= 70000 ? usePoint * 0.02 : 0;
  const remainPoint = parseInt(userInfo.points) - usePoint + earnPoint;

  const point = {
    curPoint: parseInt(userInfo.points),
    usePoint: usePoint,
    earnPoint: earnPoint,
    remainPoint: remainPoint,
    price: parseInt(totalPrice),
    shipmentFee: parseInt(fee),
  };

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
        <PaymentMethod point={point} />
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
  let day = now.getDay() + 1; //next day

  if (month < 10) {
    month = '0' + String(month);
  }
  if (day < 10) {
    day = '0' + String(day);
  }

  const date = year + '-' + month + '-' + day;
  return date;
};
