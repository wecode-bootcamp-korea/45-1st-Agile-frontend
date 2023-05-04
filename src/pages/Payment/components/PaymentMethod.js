import React from 'react';
import Agreement from './Agreement';
import './PaymentMethod.scss';

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <div className="text-xl">결제수단</div>
      <div className="payment-method-main">
        <div className="payment-method-select">
          <div className="text-lg">결제수단 선택</div>
          <div className="payment-method-point">
            <button className="point-button">포인트</button>
            <Agreement />
            <div className="confirm">
              <div>주문 내용을 확인하였으며 약관에 동의합니다.</div>
            </div>
            <div className="pay">
              <button className="pay-button">결제하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;