import React from 'react';
import './Button.scss';

const Button = ({ color, children, onClick }) => {
  return (
    <button onClick={onClick} className={`button button-${color}`}>
      {children}
    </button>
  );
};

export default Button;
