import React, { useState, useEffect } from 'react';
import ItemTitle from './ItemTitle';
import LikesProduct from './LikesProduct';
import './Likes.scss';

const Likes = () => {
  const [likesList, setLikesList] = useState([]);

  useEffect(() => {
    fetch('/data/subscribeData.json')
      .then(res => res.json())
      .then(data => {
        setLikesList(data);
      });
  }, []);

  return (
    <div className="likes">
      <div className="likes-main">
        <ItemTitle
          title="관심 제품"
          details="관심 제품은 최대 200개까지 저장됩니다."
        />

        <div className="likes-list">
          <div className="likes-select">
            <div className="all-select">
              <input type="checkbox" />
              <div className="text-lg">
                <b>전체선택</b> (/{likesList.length})
              </div>
            </div>
            <div>선택삭제</div>
          </div>
          <div className="likes-list-items">
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
    </div>
  );
};

export default Likes;
