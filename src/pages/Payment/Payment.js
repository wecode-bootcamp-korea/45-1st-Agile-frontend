import React, { useState, useEffect } from 'react';
import OrderList from './components/OrderList';
import Orderer from './components/Orderer';
import Shipment from './components/Shipment';
import Subscribe from './components/Subscribe';
import PaymentMethod from './components/PaymentMethod';
import PaymentInfo from './components/PaymentInfo';
import './Payment.scss';

const Payment = () => {
  const [info, setInfo] = useState({
    name: '박현아',
    phone_number: '',
    email: '',
    address: '',
    receiver_name: '',
    receiver_phone_number: '',
    receiver_address: '',
    subscribe_start: subDate(),
  });

  const handleInfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="payment">
      <div className="order-sheet">
        <p className="text-2xl">주문서</p>
      </div>

      <OrderList />
      <Orderer info={info} handleInfo={handleInfo} />
      <Shipment info={info} />
      <Subscribe info={info} />
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
