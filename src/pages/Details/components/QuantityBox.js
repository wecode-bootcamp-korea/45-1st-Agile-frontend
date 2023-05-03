import React from 'react';
import './QuantityBox.scss';

export const QuantityBox = props => {
  const { count, setCount } = props;
  const handleClick = num => {
    return setCount(prev => prev + num);
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
      <input type="text" placeholder="" value={count} readOnly />
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
