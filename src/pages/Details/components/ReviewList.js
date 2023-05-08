import React, { useEffect, useState } from 'react';
import Review from './Review';
import ReviewPaginationButton from './ReviewPaginationButton';
import './ReviewList.scss';

const LIMIT = 5;

const ReviewList = (id, token) => {
  const [reviewsData, setReviewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const total = 16;

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const offset = (currentPage - 1) * LIMIT;
        console.log(offset);
        const res = await fetch('/data/reviewsdata.json', {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: token,
          },
        });
        const data = await res.json();
        setReviewsData(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchReviewsData();
  }, [currentPage, id, token]);

  const pageNumber = Math.ceil(total / LIMIT);
  const pageNumberArr = [...Array(pageNumber)].map((_, index) => index + 1);

  const handlePageClick = num => () => {
    setCurrentPage(num);
  };

  if (!reviewsData) return;
  return (
    <div>
      {reviewsData.map((review, index) => {
        return <Review review={review} key={index} />;
      })}
      <div>
        <div className="review-pagination-buttons">
          {pageNumberArr.map(num => {
            return (
              <ReviewPaginationButton
                point={`${num === currentPage ? 'selected-page' : ''}`}
                onClick={handlePageClick(num)}
                key={num}
              >
                {num}
              </ReviewPaginationButton>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
