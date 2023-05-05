import React, { useState, useEffect } from 'react';
import OrderList from './components/OrderList';
import OrdererInfo from './components/Orderer';
import Shipment from './components/Shipment';
import Subscribe from './components/Subscribe';
import PaymentMethod from './components/PaymentMethod';
import PaymentInfo from './components/PaymentInfo';
import './Payment.scss';

const Payment = () => {
  const [info, setInfo] = useState({
    name: '',
    phone_number: '',
    email: '',
    address: '',
  });
  return (
    <div className="payment">
      <div className="order-sheet">
        <p className="text-2xl">주문서</p>
      </div>

      <OrderList />
      <OrdererInfo info={info} />
      <Shipment info={info} />
      <Subscribe />
      <div className="pay-part">
        <PaymentMethod />
        <PaymentInfo />
      </div>
    </div>
  );
};
export default Payment;
