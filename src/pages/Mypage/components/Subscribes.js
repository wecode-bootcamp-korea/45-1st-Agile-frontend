import React, { useState, useEffect } from 'react';
import ItemTitle from './ItemTitle';
import SubscribesProduct from './SubscribesProduct';
import './Subscribes.scss';

const Subscribes = () => {
  const [subList, setSubList] = useState([]);

  useEffect(() => {
    fetch('/data/subscribeData.json')
      .then(res => res.json())
      .then(data => {
        setSubList(data);
      });
  }, []);

  return (
    <div className="subscribes">
      <ItemTitle title="정기구독 관리" />
      <div className="subscribes-main">
        <div className="text-lg application-details">
          신청내역 ({subList.length}건)
        </div>
        <div className="subscribes-list">
          {subList.length === 0 && (
            <div className="no-list">신청내역이 없습니다.</div>
          )}
          {subList.length !== 0 &&
            subList.map(data => {
              return <SubscribesProduct key={data.id} data={data} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Subscribes;
