import React from 'react';
import './Count.scss';

const Count = props => {
  return (
    <div className="count">
      <div className="countInput">
        <button
          onClick={() => {
            props.count <= 1
              ? props.setCount(1)
              : props.setCount(props.count - 1);
          }}
        >
          -
        </button>
        <div className="countInputText">{props.count}</div>
        <button
          onClick={() => {
            props.setCount(props.count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
