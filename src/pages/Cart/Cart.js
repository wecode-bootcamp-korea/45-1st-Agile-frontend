import React, { useEffect, useState } from 'react';
import Title from './Components/Title';
import Product from './Components/Product';
import OrderInfo from './Components/OrderInfo';
import './Cart.scss';

const Cart = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        setProduct(data[0]);
      });
  }, []);

  const button = () => {};
  if (!product) return;
  return (
    <div className="container">
      <Title />
      <div className="content-wrap">
        <div className="checkbox-wrap">
          <Product product={product} />
        </div>
        <div className="order-info">
          <OrderInfo />
        </div>
      </div>
    </div>
  );
};
export default Cart;
