import React from 'react';
import './OrderList.scss';

const OrderList = () => {
  return (
    <div className="order-list">
      <div className="text-xl">주문제품</div>
      <div className="order-list-main">
        <div className="text-base">건강식품 외 4개 제품을 주문합니다.</div>
      </div>
    </div>
  );
};

export default OrderList;
