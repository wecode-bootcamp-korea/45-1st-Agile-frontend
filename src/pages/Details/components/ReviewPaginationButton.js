import React from 'react';
import './ReviewPaginationButton.scss';

const ReviewPaginationButton = ({ children, onClick, point }) => {
  return (
    <button
      className={`pagination-button text-base ${point}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default ReviewPaginationButton;
