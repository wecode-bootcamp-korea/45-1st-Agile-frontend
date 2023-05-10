import React from 'react';
import './SubscribesProduct.scss';

const SubscribesProduct = ({ data }) => {
  return (
    <div className="subscribes-product">
      <div className="subscribes-title">
        <b>[구독] {data.name}</b>
      </div>
      <div className="subscribes-product-main">
        <div className="subscribes-left">
          <img alt="구독제품" src={data.src} width="90" />
          <div className="product-info">
            <div className="subscribes-start">
              <div className="start-title">시작일</div>
              <div className="start-name">{data.start}</div>
            </div>
            <div className="subscribes-period">
              <div className="period-title">구독주기</div>
              <div className="period-cycle">{data.period}개월</div>
            </div>
          </div>
        </div>
        <div className="product-price">
          <b>{data.price.toLocaleString()} 원</b>
        </div>
      </div>
    </div>
  );
};

export default SubscribesProduct;
