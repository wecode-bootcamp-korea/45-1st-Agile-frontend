import React from 'react';
import Review from './Review';
import './ReviewList.scss';

const ReviewList = () => {
  return (
    <div>
      {REVIEWS.map((review, index) => {
        return <Review review={review} key={index} />;
      })}
    </div>
  );
};

export default ReviewList;

export const REVIEWS = [
  {
    id: 1,
    user_id: 'heeyeon',
    content: '최고에요',
    product_id: 'A',
    score: 4,
    date: '2022.04.20',
  },
  {
    id: 2,
    user_id: 'juicy',
    content: '만점',
    product_id: 'B',
    score: 3,
    date: '2022.04.19',
  },
  {
    id: 3,
    user_id: 'merci',
    content: '굿굿',
    product_id: 'C',
    score: 5,
    date: '2022.04.18',
  },
  {
    id: 4,
    user_id: 'coffee',
    content: '추천합니다',
    product_id: 'D',
    score: 2,
    date: '2022.04.17',
  },
  {
    id: 5,
    user_id: 'lipstick',
    content: '최고최고',
    product_id: 'E',
    score: 4,
    date: '2022.04.16',
  },
];
