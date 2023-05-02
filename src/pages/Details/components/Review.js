import React from 'react';
import './Review.scss';

const Review = () => {
  return (
    <li className="review">
      <div className="review-area">
        <div className="rate-review">
          <div className="rate">⭐</div>
          <div className="rate-title">아주 좋아요</div>
          <div className="review-date">2022.04.27</div>
        </div>
        <div className="review-content">내용</div>
        <button className="toggle-review-more">리뷰 더보기</button>
      </div>
      <div className="user-info">***님의 리뷰입니다.</div>
    </li>
  );
};

export default Review;
