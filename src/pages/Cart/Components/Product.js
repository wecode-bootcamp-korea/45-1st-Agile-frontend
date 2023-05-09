import React, { useEffect } from 'react';
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
  quantity,
  setQuantity,
}) => {
  const { price } = productList;
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
    <div className="product">
      <div className="product-wrap">
        <div className="checkbox-inner">
          <label className="all-check-label">
            <input
              type="checkbox"
              id="select-all"
              className="choice-checkbox"
              checked={productList.length === checkItems.length}
              onChange={e => handleAllCheck(e.target.checked)}
            />
            <div className="choice">전체선택</div>
          </label>

          <div>
            ({checkItems.length}/{productList.length})
          </div>
          <div className="divide">|</div>
          <div className="choice">선택삭제</div>

          {/* <div className="all-wrap">
            <label for="select-all" className="select">
              
            </label>
            
          </div>
          
           */}
        </div>
        <div className="message-web">
          <div>
            <List
              handleSingleCheck={handleSingleCheck}
              productList={productList}
              setProductList={setProductList}
              checkItems={checkItems}
              setCheckItems={setCheckItems}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
          <div className="summary-info">
            {isDisplay ? (
              <Summmary
                productList={productList}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
