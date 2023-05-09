import React from 'react';
import './Review.scss';

const Review = ({ review }) => {
  const { content, createdAt, score, userId } = review;

  const scoreToStars = score => {
    let filledStar = '★'.repeat(score);
    let emptyStar = '☆'.repeat(5 - score);
    let result = filledStar + emptyStar;
    return result;
  };
  const reviewDate = new Date(createdAt);
  const DATE = reviewDate.toLocaleDateString('ko-KR');
  return (
    <li className="review">
      <div className="review-area">
        <div className="rate-review">
          <div className="rate">{scoreToStars(score)}</div>

          <div className="review-date">{DATE}</div>
        </div>
        <div className="review-content">{content}</div>
        <button className="toggle-review-more">리뷰 더보기</button>
      </div>
      <div className="user-info">{`${userId}님의 리뷰입니다.`}</div>
    </li>
  );
};

export default Review;
