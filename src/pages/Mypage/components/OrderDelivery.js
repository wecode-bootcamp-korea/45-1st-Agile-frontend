import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemTitle from './ItemTitle';
import './OrderDelivery.scss';

const OrderDelivery = () => {
  const [orderStatus, setOrderStatus] = useState({
    PENDING: '',
    SHIPPING: '',
    COMPLETE: '',
  });
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
        const { message, data, orderStatus } = res;
        setOrderStatus(orderStatus);
        console.log(data);
        console.log(orderStatus);
        // setSubList(result);
      });
  }, []);

  return (
    <div className="order-delivery">
      <ItemTitle title="주문배송 조회" />

      <div className="order-delivery-main">
        {PRESENT_CONDITION_INFO.map(data => {
          return (
            <>
              <div key={data.id} className="condition-mode">
                <div className="text-2xl">{orderStatus[data.type]}</div>
                <div className="mode">{data.title}</div>
              </div>
              <div className="text-lg">{'>'}</div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default OrderDelivery;

const PRESENT_CONDITION_INFO = [
  { id: 1, count: 0, title: '배송준비중', type: 'PENDING' },
  { id: 2, count: 1, title: '배송중', type: 'SHIPPING' },
  { id: 3, count: 0, title: '배송완료', type: 'COMPLETE' },
];
