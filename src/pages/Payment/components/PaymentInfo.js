import React from 'react';
import './PaymentInfo.scss';

const PaymentInfo = () => {
  return (
    <div className="payment-info">
      <div className="text-xl">결제정보</div>
      <div className="pay-box">
        <div className="ordered-product">
          <div>주문제품</div>
          <div>2900원</div>
        </div>
        <div className="shipment-fee">
          <div>배송비</div>
          <div>+3000원</div>
        </div>
        <div className="total-amount">
          <div className="text-lg">결제금액</div>
          <div className="text-lg">5500원</div>
        </div>
      </div>
      <div className="shipment-free">
        <div className="text-lg">4만원 이상 구매시 무료배송</div>
      </div>
    </div>
  );
};

export default PaymentInfo;
