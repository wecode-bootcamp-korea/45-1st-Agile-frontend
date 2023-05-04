import React from 'react';
import './QuantityBox.scss';

export const QuantityBox = ({ count, setCount }) => {
  const handleClick = num => {
    setCount(prev => prev + num);
  };

  return (
    <div className="quantity-box">
      <button
        onClick={() => handleClick(-1)}
        className="count-button common-action-button"
        disabled={count <= 1}
      >
        -
      </button>
      <input type="text" placeholder="" value={count} />
      <button
        className="count-button common-action-button"
        onClick={() => handleClick(1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityBox;
