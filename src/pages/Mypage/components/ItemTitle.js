import React from 'react';
import './ItemTitle.scss';

const ItemTitle = ({ title, details, count }) => {
  return (
    <div className="item-title">
      {details && (
        <div className="likes-top">
          <div className="top-left">
            <div className="text-xl">{title}</div>
            <div className="text-sm">{details}</div>
          </div>
          <div className="top-right">{count}</div>
        </div>
      )}

      {!details && <div className="text-xl noDetails">{title}</div>}
    </div>
  );
};

export default ItemTitle;
