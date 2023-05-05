import React from 'react';
import '../Cart.scss';

// 처음
// const Product = (props) => {
// console.log(props); // {it: {}}

// 객체 구조 분해 후
const Product = ({ it }) => {
  // const { it } = props;
  const { title } = it; // {{}}

  // console.log(it);
  return (
    <div className="product-wrap">
      <div className="checkbox-inner">
        <input type="checkbox" className="choice-checkbox" />
        <div className="choice">전체선택(0/0)</div>
        <div className="divide">|</div>
        <div className="choice">선택삭제</div>
      </div>
      <div className="message-web">
        {/* <p>장바구니에 담긴 제품이 없습니다.</p> */}
        {title}
      </div>
    </div>
  );
};
export default Product;
