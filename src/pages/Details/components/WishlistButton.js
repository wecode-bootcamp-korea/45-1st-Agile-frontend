import React from 'react';
import './WishlistButton.scss';

const WishlistButton = () => {
  return (
    <button className="wishlist-button common-action-button">
      <img src="/images/details/heart.svg" alt="wish" className="wish-img" />
    </button>
  );
};

export default WishlistButton;
