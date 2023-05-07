import React from 'react';
import './OrderList.scss';

const OrderList = ({ orderInfo }) => {
  return (
    <div className="order-list">
      <div className="text-xl">주문제품</div>
      <div className="order-list-main">
        <div className="text-base">
          {orderInfo[0]?.book_title} 외 {orderInfo.length - 1}개 제품을
          주문합니다.
        </div>
      </div>
    </div>
  );
};

export default OrderList;
