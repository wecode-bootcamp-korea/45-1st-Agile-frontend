import React from 'react';
import './ShareButton.scss';

const ShareButton = () => {
  return (
    <button className="share-button common-action-button">
      <img src="/images/details/share.svg" alt="share" className="share-img" />
    </button>
  );
};

export default ShareButton;
