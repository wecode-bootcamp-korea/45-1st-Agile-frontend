import React from 'react';
import '../Cart.scss';

const Product = () => {
  return (
    <div className="product-wrap">
      <div className="checkbox-inner">
        <input type="checkbox" className="choice-checkbox" />
        <div className="choice">전체선택(0/0)</div>
        <div className="divide">|</div>
        <div className="choice">선택</div>
      </div>
      <div className="message-web">
        <p>장바구니에 담긴 제품이 없습니다.</p>
      </div>
      {/* <p className="message-web">장바구니에 담긴 제품이 없습니다.</p> */}
    </div>
  );
};
export default Product;
