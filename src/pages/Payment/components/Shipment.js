import React from 'react';
import ShipmentSelect from './ShipmentSelect';
import './Shipment.scss';

const Shipment = () => {
  return (
    <div className="shipment">
      <div className="text-xl">배송 정보</div>
      <div className="shipment-main">
        <ShipmentSelect />

        <div className="courier">
          <div className="text-lg">받는 사람</div>
          <input />
        </div>
        <div className="address">
          <div className="text-lg">주소</div>
          <input />
        </div>
        <div className="courier-number">
          <div className="text-lg">휴대폰 번호</div>
          <input />
        </div>
        <div className="request">
          <div className="text-lg">요청사항</div>
          <select>
            <option>-- 메시지 선택 (선택사항) --</option>
            <option>배송 전에 미리 연락바랍니다.</option>
            <option>부재 시 경비실에 맡겨주세요.</option>
            <option>부재 시 문 앞에 놓아주세요.</option>
            <option>빠른 배송 부탁드립니다.</option>
            <option>택배함에 보관해 주세요</option>
            <option>직접 입력(10자 이내)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
