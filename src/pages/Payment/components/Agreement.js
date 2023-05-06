import React, { useEffect, useState } from 'react';
import './Agreement.scss';

const Agreement = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkItems, setCheckItems] = useState(AGREE_INFO);

  const handleIsCheckAll = () => {
    setIsCheckAll(!isCheckAll);
  };

  const handleCheck = idx => {};

  return (
    <div className="agreement">
      <div className="agree-all">
        <input
          type="checkbox"
          checked={isCheckAll}
          onClick={handleIsCheckAll}
        />
        <div className="text-base">모든 약관 동의</div>
      </div>
      {checkItems.map(data => {
        return (
          <div key={data.id} className="agree">
            <input
              type="checkbox"
              checked={data.isChecked}
              onClick={() => handleCheck(data.id)}
            />
            <div className="text-base">{data.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Agreement;

const AGREE_INFO = [
  { id: 1, text: '[필수]구매조건 확인 및 결제진행 동의', isChecked: false },
  { id: 2, text: '[필수]정기결제 서비스 이용 동의', isChecked: false },
];
