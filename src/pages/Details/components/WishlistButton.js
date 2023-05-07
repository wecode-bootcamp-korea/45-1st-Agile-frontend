import React from 'react';
import './WishlistButton.scss';

const WishlistButton = ({ id, isLiked, setIsLiked }) => {
  const addToLikes = () => {
    fetch('/data/cartdata.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8', token: '' },
      body: JSON.stringify({ book_id: { id } }),
    });
  };

  const handleLikesClick = () => {
    // addToLikes();
    !isLiked && setIsLiked(true);
  };

  return (
    <button
      className="wishlist-button common-action-button"
      onClick={handleLikesClick}
    >
      <img
        src={`/images/details/${isLiked ? 'red-' : ''}heart.svg`}
        alt="wish"
        className="wish-img"
      />
    </button>
  );
};

export default WishlistButton;
