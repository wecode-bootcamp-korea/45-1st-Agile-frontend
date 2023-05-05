import React, { useState, useEffect } from 'react';
import OrderList from './components/OrderList';
import Orderer from './components/Orderer';
import Shipment from './components/Shipment';
import Subscribe from './components/Subscribe';
import PaymentMethod from './components/PaymentMethod';
import PaymentInfo from './components/PaymentInfo';
import './Payment.scss';

const Payment = () => {
  const [radio, setRadio] = useState(true);
  const [info, setInfo] = useState({
    name: '박현아',
    phone_number: '',
    email: '',
    address: '',
    receiver_name: '올리브',
    receiver_phone_number: '',
    receiver_address: '',
    subscribe_start: subDate(),
  });

  const handleInfo = e => {
    const { name, value } = e.target;
    if (name != 'subscribe_start') {
      setInfo({ ...info, [name]: value });
    }
  };

  console.log(1);
  console.log(radio);

  const switchRadio = () => {
    for (let key in info) {
      if (key.includes('receiver')) {
        if (radio) {
          info[key] = '';
        } else {
          info[key] = 'ssss';
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
  let day = now.getDay() + 1;

  if (month < 10) {
    month = '0' + String(month);
  }
  if (day < 10) {
    day = '0' + String(day);
  }

  const date = year + '-' + month + '-' + day;
  return date;
};
