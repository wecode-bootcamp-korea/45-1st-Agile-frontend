import React from 'react';
import ShippingInfo from '../../Details/components/ShippingInfo';
import BuyingButton from './BuyingButton';
import './OrderInfo.scss';

const OrderInfo = ({ productList, setProductList }) => {
  const { price } = productList;
  const isDisplay = productList.length !== 0;
  // const totalPrice = price *

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

      <div className="shipping-free">
        {isDisplay ? <ShippingInfo /> : ''}
        {/* {isDisplay && productList.map(item => <ShippingInfo it={item} />)} */}
      </div>

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

export default OrderInfo;
