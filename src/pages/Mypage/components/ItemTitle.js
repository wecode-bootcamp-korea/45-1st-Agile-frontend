import React from 'react';
import './ItemTitle.scss';

const ItemTitle = ({ title, details }) => {
  return (
    <div className="item-title">
      <div className="text-xl titles">{title}</div>
      {details && <div className="text-sm details">{details}</div>}
    </div>
  );
};

export default ItemTitle;
