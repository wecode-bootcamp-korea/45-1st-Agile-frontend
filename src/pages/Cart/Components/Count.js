import React from 'react';
import './Count.scss';

const Count = props => {
  const handleMinus = () => {
    props.count <= 1 ? props.setCount(1) : props.setCount(props.count - 1);
  };

  const handlePlus = () => {
    props.setCount(props.count + 1);
  };

  return (
    <div className="count">
      <div className="countInput">
        <button onClick={handleMinus}>-</button>
        <div className="countInputText">{props.count}</div>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
};

export default Count;
