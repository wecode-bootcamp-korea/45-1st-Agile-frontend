import React from 'react';
import './Button.scss';

const Button = props => {
  const { color, children, font } = props;
  return (
    <button className={`button button-${color} ${font}`}>{children}</button>
  );
};

export default Button;
