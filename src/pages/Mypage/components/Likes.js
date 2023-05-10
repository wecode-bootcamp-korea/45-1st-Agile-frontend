import React, { useState, useEffect } from 'react';
import ItemTitle from './ItemTitle';
import LikesList from './LikesList';
import './Likes.scss';

const Likes = () => {
  const [likesArr, setLikesArr] = useState([]);
  const [checkItems, setCheckItems] = useState([]);

  const likesGetFetch = () => {
    fetch('http://10.58.52.196:3000/likes', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      // fetch('http://10.58.52.196:3000/users/likes')
      .then(res => res.json())
      .then(res => {
        const { message, data } = res;
        console.log(message);
        console.log(data);
        setLikesArr(data);
      });
  };

  useEffect(() => {
    likesGetFetch();
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
          likesGetFetch={likesGetFetch}
        />
      </div>
    </div>
  );
};

export default Likes;
