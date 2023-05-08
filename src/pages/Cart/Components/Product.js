import React, { useState, useEffect } from 'react';
import Summmary from './Summary';
import './Product.scss';

// 객체 구조 분해 후
const Product = props => {
  const [productList, setProductList] = useState([]);
  const isDisplay = productList.length !== 0;

  useEffect(() => {
    fetch('/data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  return (
    <div className="checkbox-wrap">
      <div className="proßduct-wrap">
        <div className="checkbox-inner">
          <input type="checkbox" id="select-all" className="choice-checkbox" />
          <label for="select-all" className="select">
            <div className="choice">전체선택(0/0)</div>
            <div className="divide">|</div>
            <div className="choice">선택삭제</div>
          </label>
        </div>
        <div className="message-web">
          <div>{props.list}</div>

          {/* {title} */}
        </div>

        <div className summary-info>
          {isDisplay ? <Summmary /> : ''}
        </div>
      </div>
    </div>
  );
};
export default Product;
