import React from 'react';
import './LikesProduct.scss';

const LikesProduct = ({
  data,
  checkItems,
  setCheckItems,
  handleSingleCheck,
  likesGetFetch,
}) => {
  const handleLikesSingleDelete = () => {
    console.log('삭제');
    console.log(data);
    fetch(`http://10.58.52.196:3000/likes?likeId=${data.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json;charset=utf-8',
      },
      // body: JSON.stringify({ query: data.id }),
    });

    likesGetFetch();
  };

  const handleLikesAddCart = () => {
    console.log('장바구니');

    fetch('http://10.58.52.196:3000/carts', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        bookId: data.bookId,
        amount: 1,
        isSubscribe: data.isSubscribe,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
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
        <img alt="관심제품" src={data.thumbnail} width="90" />
        <div className="product-info">
          <div className="product-name">
            {data.isSubscribe === 1 && <span>[구독]</span>}
            {data.title}
          </div>
          <div className="product-price">
            {parseInt(data.price).toLocaleString()}원
          </div>
        </div>
      </div>
      <div className="likes-right">
        <button onClick={handleLikesSingleDelete}>삭제</button>
        <button className="cart" onClick={handleLikesAddCart}>
          장바구니
        </button>
      </div>
    </div>
  );
};

export default LikesProduct;
