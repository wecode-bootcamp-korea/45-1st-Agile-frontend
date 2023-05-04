import React from 'react';
import '../Cart.scss';

const OrderInfo = () => {
  return (
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
  );
};

export default OrderInfo;
