import React from 'react';
import './PaymentInfo.scss';

const PaymentInfo = ({ point }) => {
  return (
    <div className="payment-info">
      <div className="text-xl">결제정보</div>
      <div className="pay-box">
        {AMOUNT_INFO.map(data => {
          return (
            <div key={data.id} className="ordered-product">
              <div>{data.title}</div>
              <div>{point[data.type].toLocaleString()}원</div>
            </div>
          );
        })}

        {/* <div className="ordered-product">
          <div>주문제품</div>
          <div>{point.price.toLocaleString()}원</div>
        </div> */}
        {/* <div className="shipment-fee">
          <div>배송비</div>
          <div>+{point.shipmentFee.toLocaleString()}원</div>
        </div>
        <div className="total-amount">
          <div className="text-lg">결제금액</div>
          <div className="text-lg">{point.usePoint.toLocaleString()}원</div>
        </div> */}
      </div>
      <div className="shipment-free">
        <div className="text-lg">4만원 이상 구매시 무료배송</div>
      </div>
    </div>
  );
};

export default PaymentInfo;

const AMOUNT_INFO = [
  { id: 1, title: '주문제품', type: 'price' },
  { id: 1, title: '배송비', type: 'shipmentFee', oper: ' + ' },
  { id: 1, title: '결제금액', type: 'usePoint' },
];
