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
  const { price } = productList;
  const isDisplay = productList.length !== 0;
  const [count, setCount] = useState(1);
  const productPrice = price * count;

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
          <input
            type="checkbox"
            id="select-all"
            className="choice-checkbox"
            checked={productList.length === checkItems.length}
            onChange={e => handleAllCheck(e.target.checked)}
          />
          <label for="select-all" className="select">
            <div className="choice">
              전체선택({checkItems.length}/{productList.length})
            </div>
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
              productPrice={productPrice}
            />
          </div>

          {/* {title} */}
        </div>

        <div className summary-info>
          {isDisplay ? (
            <Summmary
              productList={productList}
              count={count}
              setCount={setCount}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
export default Product;
