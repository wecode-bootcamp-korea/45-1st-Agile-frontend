import React from 'react';
import '../Cart.scss';
import ProductInfo from './productInfo';

const Product = ({ product }) => {
  const { title, price, author } = product;

  return (
    <div className="product-wrap">
      <div className="checkbox-inner">
        <input type="checkbox" className="choice-checkbox" />
        <div className="choice">전체선택(0/0)</div>
        <div className="divide">|</div>
        <div className="choice">선택</div>
      </div>
      <div className="message-web">
        {!product ? (
          <p>장바구니에 담긴 제품이 없습니다.</p>
        ) : (
          <ProductInfo title={title} />
        )}
      </div>
    </div>
  );
};
export default Product;
