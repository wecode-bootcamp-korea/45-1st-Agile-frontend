import React from 'react';
import './QuantityBox.scss';

export const QuantityBox = () => {
  const count = 1;
  return (
    <div className="quantity-box">
      <button className="count-button common-action-button">-</button>
      <input type="text" placeholder="" value={count} />
      <button className="count-button common-action-button">+</button>
    </div>
  );
};

export default QuantityBox;
