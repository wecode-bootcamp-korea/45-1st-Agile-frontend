import React, { useEffect, useState } from 'react';
import Review from './Review';
import './ReviewList.scss';

const ReviewList = id => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const res = await fetch('/data/reviewsdata.json');
        const data = await res.json();
        setReviewsData(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchReviewsData();
  }, [id]);

  if (!reviewsData) return;
  return (
    <div>
      {reviewsData.map((review, index) => {
        return <Review review={review} key={index} />;
      })}
    </div>
  );
};

export default ReviewList;
