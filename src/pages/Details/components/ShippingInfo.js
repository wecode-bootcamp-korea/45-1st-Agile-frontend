import React from 'react';
import './ShippingInfo.scss';

const ShippingInfo = ({ totalPriceInCart }) => {
  const SHIPPING_COST = 40000;

  return (
    <div className="shipping-info">
      <div className="free-shipping-conditions">4만원 이상 구매시 무료배송</div>
      <div className="shipping-cost">
        <div className="shipping-cost-first">배송비</div>
        <div className="shipping-cost-second">
          <span
            className={`price-area ${
              totalPriceInCart >= SHIPPING_COST ? 'line-through' : ''
            }`}
          >
            3,000원
          </span>
          <span className="rest-price-area">
            {totalPriceInCart < SHIPPING_COST
              ? `무료배송까지
              ${(SHIPPING_COST - totalPriceInCart).toLocaleString('kr')}원`
              : '무료'}
          </span>
        </div>
      </div>
      <div className="shipping-cost">
        <div className="shipping-cost-first">혜택</div>
        <div className="shipping-cost-second">7만원 이상 2% 적립</div>
      </div>
    </div>
  );
};

export default ShippingInfo;
