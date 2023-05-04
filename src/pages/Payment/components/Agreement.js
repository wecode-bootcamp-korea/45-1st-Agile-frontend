import React from 'react';
import './Agreement.scss';

const Agreement = () => {
  return (
    <div className="agreement">
      <div className="agree-all">
        <input type="checkbox" />
        <div className="text-base">모든 약관 동의</div>
      </div>
      <div className="agree-pay">
        <input type="checkbox" />
        <div className="text-base">[필수]구매조건 확인 및 결제진행 동의</div>
      </div>
      <div className="agree-subscribe">
        <input type="checkbox" />
        <div className="text-base">[필수]정기결제 서비스 이용 동의</div>
      </div>
    </div>
  );
};

export default Agreement;
