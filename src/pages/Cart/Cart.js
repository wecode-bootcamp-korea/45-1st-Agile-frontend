import React from 'react';
import Title from './Components/Title';
import Product from './Components/Product';
import OrderInfo from './Components/OrderInfo';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="container">
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
