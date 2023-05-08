import React from 'react';
import './OrderList.scss';

const OrderList = ({ orderInfo }) => {
  const orderLength = orderInfo.length - 1;

  return (
    <div className="order-list">
      <div className="text-xl">주문제품</div>
      <div className="order-list-main">
        <div>
          {orderInfo[0]?.bookTitle}{' '}
          {orderLength && <span>외 {orderLength}개 </span>}
          제품을 주문합니다.
        </div>
      </div>
    </div>
  );
};

export default OrderList;
