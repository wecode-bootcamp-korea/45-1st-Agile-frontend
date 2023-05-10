import React, { useState } from 'react';
import './Agreement.scss';

const Agreement = () => {
  const [checkItems, setCheckItems] = useState([]);

  const handleAllCheck = checked => {
    if (checked) {
      const idArr = [];
      AGREE_INFO.forEach(el => idArr.push(el.id));
      setCheckItems(idArr);
    } else {
      setCheckItems([]);
    }
  };

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };

  return (
    <div className="agreement">
      <div className="agree-all">
        <input
          type="checkbox"
          checked={AGREE_INFO.length === checkItems.length}
          onChange={e => handleAllCheck(e.target.checked)}
        />
        <div className="all-article">모든 약관 동의</div>
      </div>
      <div className="agree-single">
        {AGREE_INFO.map(data => {
          return (
            <div key={data.id} className="agree-article">
              <input
                type="checkbox"
                checked={checkItems.includes(data.id)}
                onChange={e => handleSingleCheck(e.target.checked, data.id)}
              />
              <div className="single-article">{data.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Agreement;

const AGREE_INFO = [
  { id: 1, text: '[필수]구매조건 확인 및 결제진행 동의', isChecked: false },
  { id: 2, text: '[필수]정기결제 서비스 이용 동의', isChecked: false },
];
