import React from 'react';
import './Point.scss';

const Point = () => {
  return (
    <div className="point">
      {POINT_INFO.map(data => {
        return (
          <div key={data.id} className="point-status">
            <div className="status-title">{data.title}</div>
            <div className="status-count">{data.count.toLocaleString()}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Point;

const POINT_INFO = [
  { id: 1, title: '현재 포인트', count: 9000 },
  { id: 3, title: '사용 포인트', count: 4000 },
  { id: 2, title: '예상잔여 포인트', count: 5000 },
];
