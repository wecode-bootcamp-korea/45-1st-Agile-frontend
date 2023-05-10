import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderList from './components/OrderList';
import Orderer from './components/Orderer';
import Shipment from './components/Shipment';
import Subscribe from './components/Subscribe';
import PaymentMethod from './components/PaymentMethod';
import PaymentInfo from './components/PaymentInfo';
import './Payment.scss';

const Payment = () => {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({});
  const [orderInfo, setOrderInfo] = useState([]);
  const [radio, setRadio] = useState(true);
  const [info, setInfo] = useState({});

  const navigate = useNavigate();

  const cartIds = [51, 50];

  const handlePayButton = () => {
    if (point.remainPoint < 0) {
      navigate('/invalidAccess');
      return;
    }
    navigate('/orderCompleted', {
      state: {
        address: info.receiver_address,
        subscribeDeliveryTime: info.subscribeStart,
        cartIds: [],
      },
    });
    // console.log('상세 -> 주문 결제버튼');
    // fetch('http://10.58.52.196:3000/orders/direct', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: localStorage.getItem('token'),
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({
    //     address: info.receiver_address,
    //     subscribeDeliveryTime: info.subscribeStart,
    //     bookId: orderInfo[0].bookId,
    //     quantity: orderInfo[0].quantity,
    //   }),
    // })
    //   .then(res => res.json())
    //   .catch(e => navigate('/invalidAccess'))
    //   .then(data => {
    //     console.log(data);
    //     navigate('orderCompleted', { state: {} });
    //   });

    // console.log(userInfo);
    // console.log();

    ////////////////////////////////////////////////////////////////////////

    console.log('장바구니 -> 주문 결제버튼');
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
      .catch(e => navigate('/invalidAccess'))
      .then(data => {
        console.log(data);
        navigate('orderCompleted', { state: {} });
      });

    console.log(userInfo);
    console.log();
  };

  // const { productsInfo } = location.state;

  // console.log(productsInfo);

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
      });
  }, []);

  const handleInfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

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
        const user = data.user; // for real backend data
        setUserInfo(user);
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
    // setOrderInfo(productsInfo);
  }, []);

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
