import React from 'react';
import './Orderer.scss';

const Orderer = () => {
  return (
    <div className="orderer">
      <div className="text-xl">주문자 정보</div>
      <div className="orderer-main">
        <div className="orderer-name">
          <div className="text-lg">주문자 이름</div>
          <input />
        </div>
        <div className="orderer-number">
          <div className="text-lg">휴대폰 번호</div>
          <input />
        </div>
        <div className="orderer-email">
          <div className="text-lg">이메일</div>
          <input />
        </div>
        <div className="caution">
          <div className="text-base">
            배송이 시작되면 주문 처리 과정을 이메일과 휴대폰 번호로 알려드리니,
            <br />꼭 정확한 정보를 입력해 주세요.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderer;
