import React from 'react';
import './WishlistButton.scss';

const WishlistButton = ({ id, isWished, setIsWished }) => {
  const addToLikes = () => {
    fetch('`http://10.58.52.241:3000/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: '',
      },
      body: JSON.stringify({ bookId: id }),
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
