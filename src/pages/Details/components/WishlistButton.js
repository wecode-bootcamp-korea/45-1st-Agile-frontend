import React, { useState } from 'react';
import './WishlistButton.scss';

const WishlistButton = ({ id, isLiked }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(isLiked);
  const addToLikes = async () => {
    try {
      const res = await fetch('`http://10.58.52.241:3000/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: '',
        },
        body: JSON.stringify({ bookId: id }),
      });
      if (res.ok) {
        const data = await res.json();
        const message = data.message;
        message.includes('DELETE')
          ? setIsHeartFilled(false)
          : setIsHeartFilled(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikesClick = () => {
    addToLikes();
  };

  return (
    <button
      className="wishlist-button common-action-button"
      onClick={handleLikesClick}
    >
      <img
        src={`/images/details/${isHeartFilled ? 'red-' : ''}heart.svg`}
        alt="wish"
        className="wish-img"
      />
    </button>
  );
};

export default WishlistButton;
