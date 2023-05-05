import React from 'react';
import check from '../../assets/payment/circleCheck.jpg';
import './OrderCompleted.scss';

const OrderCompleted = () => {
  return (
    <div className="order-completed">
      <div className="completed-box">
        <div className="box-top">
          <img alt="check" src={check} width="50" />
          <div className="text-lg">
            <b>고객님의 주문이 완료되었습니다.</b>
          </div>
        </div>
        <div className="box-mid">
          <div className="order-number">
            <div>주문번호</div>
            <div>
              <b>123456</b>
            </div>
          </div>
          <div className="payment-amount">
            <div>결제금액</div>
            <div>
              <b>5000원</b>
            </div>
          </div>
        </div>
        <div className="box-bottom">
          <button className="confirm-order">
            <b>주문확인하기</b>
          </button>
          <button className="continue-shopping">
            <b>쇼핑계속하기</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;
