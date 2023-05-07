import React from 'react';
import './Point.scss';

const Point = ({ point }) => {
  return (
    <div className="point">
      {POINT_INFO.map(data => {
        return (
          <div key={data.id} className="point-status">
            <div className="status-title">{data.title}</div>
            <div className="status-count">
              {data.oper}
              {point[data.type].toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Point;

const POINT_INFO = [
  { id: 1, title: '현재 포인트', type: 'curPoint', oper: '' },
  { id: 2, title: '사용 포인트', type: 'usePoint', oper: ' - ' },
  { id: 3, title: '적립 포인트', type: 'earnPoint', oper: ' + ' },
  { id: 4, title: '예상잔여 포인트', type: 'remainPoint', oper: ' = ' },
];
