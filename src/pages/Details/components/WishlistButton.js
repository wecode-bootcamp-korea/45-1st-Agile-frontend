import React from 'react';
import './WishlistButton.scss';

const WishlistButton = ({ id, isWished, setIsWished }) => {
  const addToLikes = () => {
    fetch('/data/cartdata.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8', token: '' },
      body: JSON.stringify({ bookId: { id } }),
    });
  };

  const handleLikesClick = () => {
    // addToLikes();
    !isWished && setIsWished(true);
  };

  return (
    <button
      className="wishlist-button common-action-button"
      onClick={handleLikesClick}
    >
      <img
        src={`/images/details/${isWished ? 'red-' : ''}heart.svg`}
        alt="wish"
        className="wish-img"
      />
    </button>
  );
};

export default WishlistButton;
