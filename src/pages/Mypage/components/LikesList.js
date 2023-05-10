import React from 'react';
import LikesProduct from './LikesProduct';
import './LikesList.scss';

const LikesList = ({
  likesArr,
  setLikesArr,
  checkItems,
  setCheckItems,
  likesGetFetch,
}) => {
  const handleAllCheck = checked => {
    if (checked) {
      const idArr = [];
      likesArr.forEach(el => idArr.push(el.id));
      setCheckItems(idArr);
    } else {
      setCheckItems([]);
    }
  };

  const isAllChecked = checkItems.length === likesArr.length;

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };

  const likesDeleteFetch = () => {
    console.log('삭제');
    // fetch('http://10.58.52.196:3000/likes', {
    //   method: 'DELETE',
    //   headers: {
    //     Authorization: localStorage.getItem('token'),
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({ query: data.id }),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log('delete ok');
    //     console.log(data);
    //   });
  };

  return (
    <div className="likes-list">
      <div className="likes-select">
        <div className="all-select">
          <input
            type="checkbox"
            checked={isAllChecked}
            onChange={e => handleAllCheck(e.target.checked)}
          />
          <div className="text-lg">
            <b onClick={() => handleAllCheck(!isAllChecked)}>전체선택</b> (
            {checkItems.length}/{likesArr.length})
          </div>
        </div>
        <div>선택삭제</div>
      </div>
      <div className="likes-list-items">
        {likesArr.length === 0 && (
          <div className="no-list">관심 상품이 없습니다.</div>
        )}
        {likesArr.length !== 0 &&
          likesArr.map(data => {
            return (
              <LikesProduct
                key={data.id}
                data={data}
                checkItems={checkItems}
                setCheckItems={setCheckItems}
                handleSingleCheck={handleSingleCheck}
                likesGetFetch={likesGetFetch}
              />
            );
          })}
      </div>
    </div>
  );
};

export default LikesList;
