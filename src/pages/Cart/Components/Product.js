import React, { useState, useEffect } from 'react';
import Summmary from './Summary';
import List from './List';
import './Product.scss';

// 객체 구조 분해 후
const Product = ({
  handleAllCheck,
  handleSingleCheck,
  productList,
  setProductList,
  checkItems,
  setCheckItems,
}) => {
  // const [productList, setProductList] = useState([]);

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
  // console.log(productList);

  return (
    <div className="checkbox-wrap">
      <div className="proßduct-wrap">
        <div className="checkbox-inner">
          <input
            type="checkbox"
            id="select-all"
            className="choice-checkbox"
            onChange={e => handleAllCheck(e.target.checked)}
          />
          <label for="select-all" className="select">
            <div className="choice">전체선택(0/0)</div>
            <div className="divide">|</div>
            <div className="choice">선택삭제</div>
          </label>
        </div>
        <div className="message-web">
          <div>
            <List
              handleSingleCheck={handleSingleCheck}
              productList={productList}
              setProductList={setProductList}
              checkItems={checkItems}
              setCheckItems={setCheckItems}
            />
          </div>

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
