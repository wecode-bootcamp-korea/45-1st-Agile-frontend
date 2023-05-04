import React from 'react';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="container">
      <div className="title">
        <h2 className="title-name">장바구니</h2>
      </div>

      <div className="checkbox-wrap">
        <div className="info-wrap">
          <div className="checkbox-inner">
            <input type="checkbox" id="empty-checkbox" />
            <div className="choice">전체선택(0/0)</div>
            <div className="divide">|</div>
            <div className="choice">선택</div>
          </div>
          <div className="message-web">
            <p>장바구니에 담긴 제품이 없습니다.</p>
          </div>
          {/* <p className="message-web">장바구니에 담긴 제품이 없습니다.</p> */}
        </div>
        <div className="order-info">
          <div className="order-won">
            <div className="product-amount">
              <span>합계</span>
              <span>0원</span>
            </div>

            <div className="shipment-fee">
              <span>배송비</span>
              <span>+0원</span>
            </div>

            <div className="total">
              <span>결제예정금액</span>
              <span>0원</span>
            </div>
          </div>

          <button className="empty-button web">제품을 담아주세요</button>
          <span className="tips">
            쿠폰과 적립금은 결제 페이지에서 적용할 수 있어요
          </span>
        </div>
      </div>
    </div>
  );
};
export default Cart;
