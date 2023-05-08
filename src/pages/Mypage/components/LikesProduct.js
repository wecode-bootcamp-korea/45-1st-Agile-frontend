import React from 'react';
import './LikesProduct.scss';

const LikesProduct = ({ data }) => {
  return (
    <div className="likes-product">
      <div className="likes-left">
        <img alt="관심제품" src={data.src} width="90" />
        <div className="product-info">
          <div className="product-name">{data.name}</div>
          <div className="product-price">{data.price.toLocaleString()}원</div>
        </div>
      </div>
      <div className="likes-right">
        <button>삭제</button>
        <button className="cart">장바구니</button>
      </div>
    </div>
  );
};

export default LikesProduct;
