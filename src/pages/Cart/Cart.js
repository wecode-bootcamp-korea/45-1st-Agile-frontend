import React, { useState, useEffect } from 'react';
import Title from './Components/Title';
import Product from './Components/Product';
import OrderInfo from './Components/OrderInfo';
import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);

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
        </div>
      </div>
    </div>
  );
};
export default Cart;

// {productList.map(item => (
//   <Product it={item} />
// ))}
