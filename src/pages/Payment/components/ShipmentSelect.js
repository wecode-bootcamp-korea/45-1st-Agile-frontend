import React from 'react';
import './ShipmentSelect.scss';

const ShipmentSelect = () => {
  return (
    <div className="shipment-select">
      <div className="text-lg">배송지 선택</div>
      <div className="radio-select">
        <div className="location-same">
          <input type="radio" />
          <div className="text-base">주문자 정보와 동일</div>
        </div>
        <div className="location-new">
          <input type="radio" />
          <div className="text-base">새로운 배송지</div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentSelect;
