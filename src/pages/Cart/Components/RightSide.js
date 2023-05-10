import React from 'react';
import ShippingInfo from '../../Details/components/ShippingInfo';
import BuyingButton from './BuyingButton';
import './RightSide.scss';
const RightSide = ({ subtotal, total, DELIVERY_FEE, productList }) => {
  const isDisplay = productList.length !== 0;
  return (
    <div className="right-side">
      <div className="order-info">
        <div className="sub-total">
          합계 <div className="won">{subtotal}</div>
        </div>
        <div className="discount">
          할인금액 <div className="won">-0원</div>
        </div>
        <div className="deliver-fee">
          {' '}
          배송비
          <div className="won">+{DELIVERY_FEE}원</div>
        </div>
        <div className="total">
          결제예정금액
          <div className="won">{total}원</div>
        </div>
      </div>
      <div className="shipping-free">{isDisplay ? <ShippingInfo /> : ''}</div>

      <div className="buying-button">
        {isDisplay ? (
          <BuyingButton />
        ) : (
          <button className="empty-button web">제품을 담아주세요</button>
        )}
      </div>

      <span className="tips">
        쿠폰과 적립금은 결제 페이지에서 적용할 수 있어요
      </span>
    </div>
  );
};
export default RightSide;
