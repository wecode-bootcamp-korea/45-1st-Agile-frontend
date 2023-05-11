import React from 'react';
import OrderItems from './OrderItems';
import ItemTitle from './ItemTitle';
import './OrderStatus.scss';

const OrderStatus = ({ dataStatus }) => {
  return (
    <div className="order-status">
      <ItemTitle title="주문내역 조회" />
      <div>
        {dataStatus.map((data, index) => {
          return <OrderItems key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default OrderStatus;
