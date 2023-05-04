import React, { useState, useEffect } from 'react';
import SubscribesProduct from './SubscribesProduct';
import './Subscribes.scss';

const Subscribes = () => {
  const [subList, setSubList] = useState([]);

  useEffect(() => {
    fetch('/data/subscribeData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSubList(data);
      });
  }, []);

  return (
    <div className="subscribes">
      <div className="text-xl">정기구독 관리</div>
      <div className="subscribes-main">
        <div className="text-lg">신청내역 ({subList.length}건)</div>
        <div className="subscribes-list">
          <div className="no-list">신청내역이 없습니다.</div>
          {subList.map(data => {
            return <SubscribesProduct key={data.id} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Subscribes;
