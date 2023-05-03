import React from 'react';
import './Button.scss';

const Button = props => {
  const { color, children } = props;
  return <button className={`button button-${color}`}>{children}</button>;
};

export default Button;
