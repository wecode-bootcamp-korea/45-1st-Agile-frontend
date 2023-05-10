import React, { useState, useEffect } from 'react';
import ItemTitle from './ItemTitle';
import LikesList from './LikesList';

import './Likes.scss';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNjk2OTU5fQ.wPYKeEdVgIJljdnBoIelyaamXZtn-3LYrRBQiWhJktU';

const Likes = () => {
  const [likesArr, setLikesArr] = useState([]);
  const [checkItems, setCheckItems] = useState([]);
  useEffect(() => {
    fetch('http://10.58.52.196:3000/likes', {
      method: 'GET',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      // fetch('http://10.58.52.196:3000/users/likes')
      .then(res => res.json())
      .then(res => {
        const { message, data } = res;
        console.log(message);
        setLikesArr(data);
      });
  }, []);

  return (
    <div className="likes">
      <div className="likes-main">
        <ItemTitle
          title="관심 제품"
          details="관심 제품은 최대 200개까지 저장됩니다."
        />
        <LikesList
          likesArr={likesArr}
          setLikesArr={setLikesArr}
          checkItems={checkItems}
          setCheckItems={setCheckItems}
        />
      </div>
    </div>
  );
};

export default Likes;
