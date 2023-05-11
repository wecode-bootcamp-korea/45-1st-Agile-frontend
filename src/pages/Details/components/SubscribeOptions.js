import React, { useState } from 'react';
import './SubscribeOptions.scss';

const SELECT_LIST = [
  '[필수] 배송주기를 선택해 주세요.',
  '1주일',
  '1개월',
  '3개월',
];

const SubscribeOptions = ({
  isOptionSelected,
  setIsOptionSelected,
  selected,
  setSelected,
}) => {
  const handleOptionClick = () => {
    setIsOptionSelected(isOptionSelected ? false : true);
  };

  const handleCycleClick = e => {
    e.target.selectedIndex === 0
      ? setSelected('')
      : setSelected(e.target.value);
    handleOptionClick();
  };

  return (
    <div className="subscribe-options">
      <div className="delivery-cycle-options">
        <span className="text-base">배송주기</span>
        <select onChange={handleCycleClick} className="delivery-cycle text-sm">
          {SELECT_LIST.map((item, index) => {
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
