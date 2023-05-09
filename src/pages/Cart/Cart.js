import React, { useState, useEffect } from 'react';
import Title from './Components/Title';
import Product from './Components/Product';
import OrderInfo from './Components/OrderInfo';
import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);
  const [checkItems, setCheckItems] = useState([]);
  //productList를 props로 Product와 OrderInfo ,Count 로 내려줘야합니다.

  useEffect(() => {
    fetch('/data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  const handleAllCheck = checked => {
    if (checked) {
      const idArr = [];
      productList.forEach(ele => idArr.push(ele.Key));
      setCheckItems(idArr);
    } else {
      setCheckItems([]);
    }
  };

  const handleSingleCheck = (checked, key) => {
    if (checked) {
      setCheckItems(prev => [...prev, key]);
    } else {
      setCheckItems(checkItems.filter(ele => ele !== key));
    }
  };
  return (
    <div className="cart">
      <Title />
      <div className="content-wrap">
        <div className="checkbox-wrap">
          <Product
            handleAllCheck={handleAllCheck}
            handleSingleCheck={handleSingleCheck}
            productList={productList}
            setProductList={setProductList}
            checkItems={checkItems}
            setCheckItems={setCheckItems}
          />
        </div>
        <div className="order-info">
          <OrderInfo
            productList={productList}
            setProductList={setProductList}
          />
          {/* props로 productList를 내려줌 */}
        </div>
      </div>
    </div>
  );
};
export default Cart;

// {productList.map(item => (
//   <Product it={item} />
// ))}
