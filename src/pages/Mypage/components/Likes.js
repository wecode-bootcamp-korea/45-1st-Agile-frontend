import React, { useState, useEffect } from 'react';
import LikesProduct from './LikesProduct';
import './Likes.scss';

const Likes = () => {
  const [likesList, setLikesList] = useState([]);

  useEffect(() => {
    fetch('/data/subscribeData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setLikesList(data);
      });
  }, []);

  return (
    <div className="likes">
      <div className="text-xl">관심 상품</div>
      <div className="likes-main">
        <div className="likes-list">
          {likesList.length === 0 && (
            <div className="no-list">관심 상품이 없습니다.</div>
          )}
          {likesList.length !== 0 &&
            likesList.map(data => {
              return <LikesProduct key={data.id} data={data} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Likes;
