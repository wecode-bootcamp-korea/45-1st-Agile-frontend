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
      <div className="likes-top">
        <div className="top-left">
          <div className="text-xl">관심 제품</div>
          <div className="text-sm">관심 제품은 최대 200개까지 저장됩니다.</div>
        </div>
        <div className="top-right">총 {likesList.length}개</div>
      </div>
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
