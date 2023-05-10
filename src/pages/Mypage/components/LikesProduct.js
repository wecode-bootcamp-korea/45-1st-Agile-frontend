import React from 'react';
import './LikesProduct.scss';

const LikesProduct = ({
  data,
  checkItems,
  setCheckItems,
  handleSingleCheck,
}) => {
  const handleLikesDelete = () => {
    console.log('dd');
    fetch('http://10.58.52.230:3000/users/', {
      method: 'DELETE',
      headers: {
        Authorization: '',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(),
    })
      .then(res => res.json())
      .then(data => {});
  };

  const handleLikesAddCart = () => {
    console.log('fgg');

    fetch('http://10.58.52.230:3000/users/', {
      method: 'POST',
      headers: {
        Authorization: '',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(),
    })
      .then(res => res.json())
      .then(data => {});
  };

  return (
    <div className="likes-product">
      <div className="likes-left">
        <input
          type="checkbox"
          className="checkbox"
          checked={checkItems.includes(data.id)}
          onChange={e => handleSingleCheck(e.target.checked, data.id)}
        />
        <img alt="관심제품" src={data.src} width="90" />
        <div className="product-info">
          <div className="product-name">{data.name}</div>
          <div className="product-price">{data.price?.toLocaleString()}원</div>
        </div>
      </div>
      <div className="likes-right">
        <button onClick={handleLikesDelete}>삭제</button>
        <button className="cart" onClick={handleLikesAddCart}>
          장바구니
        </button>
      </div>
    </div>
  );
};

export default LikesProduct;
