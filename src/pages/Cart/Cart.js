import React from 'react';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="container">
      <div className="section title">
        <h2>장바구니</h2>
      </div>

      <div className="checkbox-wrap">
        <div className="checkbox-inner">
          <input type="checkbox" id="empty-checkbox" />
          <label for="empty-checkbox">전체선택(0/0)</label>
          <div>|</div>
          <div>선택삭제</div>
        </div>

        <div className="info-wrap">
          <p className="message-web">장바구니에 담긴 제품이 없습니다.</p>

          <div className="order-info">
            <div className="order-won">
              <div>
                <span>합계</span>
                <span>0원</span>
              </div>

              <div>
                <span>상품할인금액</span>
                <span>-0원</span>
              </div>

              <div>
                <span>배송비</span>
                <span>+0원</span>
              </div>

              <div className="total">
                <span>결제예정금액</span>
                <span>0원</span>
              </div>
            </div>

            <button className="empty-button web">제품을 담아주세요</button>
            <span>ˑ쿠폰과 적립금은 결제 페이지에서 적용할 수 있어요</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
