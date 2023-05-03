import React from 'react';
import './Review.scss';

const Review = ({ review }) => {
  const { user_id, content, date } = review;

  return (
    <li className="review">
      <div className="review-area">
        <div className="rate-review">
          <div className="rate">⭐</div>
          <div className="rate-title">{content}</div>
          <div className="review-date">{date}</div>
        </div>
        <div className="review-content">{content}</div>
        <button className="toggle-review-more">리뷰 더보기</button>
      </div>
      <div className="user-info">{`${user_id}님의 리뷰입니다.`}</div>
    </li>
  );
};

export default Review;
