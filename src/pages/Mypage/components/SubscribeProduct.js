import React from 'react';
import './SubscribeProduct.scss';

const SubscribeProduct = ({ data }) => {
  return (
    <div className="subscribe-product">
      <div className="subscribe-left">
        <img alt="구독제품" src={data.src} width="90" />
        <div className="product-info">
          <div className="product-name">{data.name}</div>
          <div className="product-price">{data.price.toLocaleString()}원</div>
        </div>
      </div>
      <div className="date-info">
        <div className="date-start">시작일: {data.start}</div>
        <div className="date-period">주기 : {data.period}개월</div>
      </div>
    </div>
  );
};

export default SubscribeProduct;
