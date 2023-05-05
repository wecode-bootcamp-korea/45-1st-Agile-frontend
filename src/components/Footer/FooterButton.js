import React from 'react';
import './FooterButton.scss';

const FooterButton = props => {
  const { onClick, children } = props;
  return (
    <button className="footer-button text-sm" onClick={onClick}>
      {children}
    </button>
  );
};

export default FooterButton;
