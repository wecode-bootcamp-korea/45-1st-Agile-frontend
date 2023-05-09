import React, { useState } from 'react';
import Count from './Count';
import './ListItem.scss';

const ListItem = ({ it }) => {
  const { image, title, price } = it;
  const [count, setCount] = useState(1);
  return (
    <div className="listitem-info">
      <input type="checkbox" className="" />
      <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fckk2n9%2Fbtseh8XtY4Z%2FbyMbN3ftovv3oUiL9vV8p0%2Fimg.png" />
      {image}
      <div className="product-info">
        <p className="product-title">{title}</p>
      </div>

      <Count count={count} setCount={setCount} />
      <div className="product-info">{price}</div>
    </div>
  );
};

export default ListItem;
