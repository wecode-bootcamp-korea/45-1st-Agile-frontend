import React from 'react';
import './Subscribe.scss';

const Subscribe = ({ info }) => {
  return (
    <div className="subscribe">
      <div className="text-xl">정기배송 시작일</div>
      <div className="subscribe-main">
        <div className="subscribe-start">
          <div className="text-lg">배송시작일</div>
          <input value={info.subscribe_start} />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
