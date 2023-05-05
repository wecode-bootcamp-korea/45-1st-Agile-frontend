import React from 'react';
import './Subscribe.scss';

const Subscribe = ({ info, handleInfo }) => {
  return (
    <div className="subscribe">
      <div className="text-xl">정기배송 시작일</div>
      <div className="subscribe-main">
        <div className="subscribe-start">
          <div className="text-lg">배송시작일</div>
          <input
            name="subscribe_start"
            value={info.subscribe_start}
            onChange={handleInfo}
            placeholder="YYYY-MM-DD"
            maxLength="10"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
