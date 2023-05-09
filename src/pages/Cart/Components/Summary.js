import React from 'react';
import './Summary.scss';

const Summmary = ({ productList }) => {
  return (
    <div className="summary">
      <div className="sum-contents">
        <div className="product-price">
          <p>제품가격</p>
        </div>
        <div>
          <strong>0원</strong>+
        </div>

        <div className="delv-price">
          <p>배송비</p>
        </div>
        <strong>0원</strong>
        <div className="sum-total">
          <p>=</p>
        </div>
        <strong>12345원</strong>
      </div>
    </div>
  );
};

export default Summmary;
