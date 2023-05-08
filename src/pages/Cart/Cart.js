import React, { useState, useEffect } from 'react';
import Title from './Components/Title';
import Product from './Components/Product';
import OrderInfo from './Components/OrderInfo';

import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);
  //productList를 props로 Product와 OrderInfo ,Count 로 내려줘야하고

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
    <div className="cart">
      <Title />
      <div className="content-wrap">
        <div className="checkbox-wrap">
          <Product />
        </div>
        <div className="order-info">
          <OrderInfo />
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
