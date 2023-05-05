import React from 'react';
import './Button.scss';

const Button = ({ color, children }) => {
  return <button className={`button button-${color}`}>{children}</button>;
};

export default Button;
