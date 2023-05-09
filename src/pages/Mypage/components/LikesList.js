import React from 'react';
import LikesProduct from './LikesProduct';
import './LikesList.scss';

const LikesList = ({ likesArr, setLikesArr }) => {
  return (
    <div className="likes-list">
      <div className="likes-select">
        <div className="all-select">
          <input type="checkbox" />
          <div className="text-lg">
            <b>전체선택</b> (/{likesArr.length})
          </div>
        </div>
        <div>선택삭제</div>
      </div>
      <div className="likes-list-items">
        {likesArr.length === 0 && (
          <div className="no-list">관심 상품이 없습니다.</div>
        )}
        {likesArr.length !== 0 &&
          likesArr.map(data => {
            return <LikesProduct key={data.id} data={data} />;
          })}
      </div>
    </div>
  );
};

export default LikesList;
