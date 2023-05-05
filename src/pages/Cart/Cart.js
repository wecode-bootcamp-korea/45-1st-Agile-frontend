import React, { useEffect, useState } from 'react';
import Title from './Components/Title';
import Product from './Components/Product';
import OrderInfo from './Components/OrderInfo';
import './Cart.scss';

const Cart = () => {
  const [product, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json', {
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
          {product.map(item => (
            <Product it={item} />
          ))}
        </div>
        <div className="order-info">
          <OrderInfo />
        </div>
      </div>
    </div>
  );
};
export default Cart;
