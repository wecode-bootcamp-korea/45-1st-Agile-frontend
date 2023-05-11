import React from 'react';
import './BuyingButton.scss';

const BuyingButton = ({ handleBuyingButton }) => {
  return (
    <div>
      <button className="buy-button" onClick={handleBuyingButton}>
        구매하기
      </button>
    </div>
  );
};

export default BuyingButton;
