import React, { useState } from 'react';
import './SubscribeOptions.scss';

const SubscribeOptions = () => {
  const [selected, setSelected] = useState('');
  const selectList = [
    '[필수] 배송주기를 선택해 주세요.',
    '1주일',
    '1개월',
    '3개월',
  ];
  const handleCycleClick = e => {
    e.target.selectedIndex === 0
      ? setSelected('')
      : setSelected(e.target.value);
  };
  return (
    <div className="subscribe-options">
      <div className="delivery-cycle-options">
        <span className="text-base">배송주기</span>
        <select
          onChange={handleCycleClick}
          value={selected}
          className="delivery-cycle text-sm"
        >
          {selectList.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      {selected !== '' && (
        <div className="selected-cycle text-base">{selected}</div>
      )}
    </div>
  );
};

export default SubscribeOptions;
