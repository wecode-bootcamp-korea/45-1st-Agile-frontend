import React, { useState, useEffect } from 'react';
import OrderList from './components/OrderList';
import Orderer from './components/Orderer';
import Shipment from './components/Shipment';
import Subscribe from './components/Subscribe';
import PaymentMethod from './components/PaymentMethod';
import PaymentInfo from './components/PaymentInfo';

import './Payment.scss';

const Payment = () => {
  const [userInfo, setUserInfo] = useState({});
  const [orderInfo, setOrderInfo] = useState({});
  const [radio, setRadio] = useState(true);
  const [info, setInfo] = useState({});
  const [price, setPrice] = useState(0);
  const [point, setPoint] = useState(0);

  const handleInfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  useEffect(() => {
    fetch('/data/userData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUserInfo(data);
        setInfo({
          name: data.name,
          phone_number: data.phone_number,
          email: data.email,
          address: data.address,
          receiver_name: data.name,
          receiver_phone_number: data.phone_number,
          receiver_address: data.address,
          subscribe_start: subDate(),
        });
        setPoint(data.points);
        console.log('point');
        console.log(data.points);
      });
  }, []);

  useEffect(() => {
    fetch('/data/orderItemsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOrderInfo(data);
        data.forEach(ele => {
          setPrice(prev => prev + ele.price * ele.quantity);
        });
      });
  }, []);

  // useEffect(() => {
  //   fetch('', {
  //     method: 'POST',
  //     headers: {
  //       accessToken: 'token',
  //       'Content-type': 'application/json;utf=8',
  //     },
  //     body: JSON.stringify(),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     });
  // }, []);

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

      <OrderList />
      <Orderer info={info} handleInfo={handleInfo} />
      <Shipment
        info={info}
        handleInfo={handleInfo}
        setRadio={setRadio}
        radio={radio}
        switchRadio={switchRadio}
      />
      <Subscribe info={info} handleInfo={handleInfo} />
      <div className="pay-part">
        <PaymentMethod />
        <PaymentInfo />
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
