import React from 'react';
import ItemTitle from './ItemTitle';
import './OrderDelivery.scss';

const OrderDelivery = () => {
  return (
    <div className="order-delivery">
      <ItemTitle title="주문배송 조회" />

      <div className="order-delivery-main">
        {PRESENT_CONDITION_INFO.map(data => {
          return (
            <>
              <div key={data.id} className="condition-mode">
                <div className="text-2xl">{data.count}</div>
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
  { id: 1, count: 0, title: '배송준비중' },
  { id: 2, count: 1, title: '배송중' },
  { id: 3, count: 0, title: '배송완료' },
];
