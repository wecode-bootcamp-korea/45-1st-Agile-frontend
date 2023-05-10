import React, { useState, useEffect } from 'react';
import LeftSide from './Components/LeftSide';
import RightSide from './Components/RightSide';
import './Cart.scss';
const Cart = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjgzNjk2NTA1fQ.u_9aaaVQ7lQ-JQemx9ex1PqvyGCzN73x6u-sS044jSg';

  useEffect(() => {
    fetch('http://10.58.52.241:3000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data.data);
        setSelectedProducts(data.data.map(product => product.cartId));
      });
  }, []);

  if (productList.length === 0) return;

  const subtotal = productList
    .filter(product => selectedProducts.includes(product.cartId))
    .map(product => product.price * product.amount)
    .reduce((acc, price) => acc + price, 0);

  const DELIVERY_FEE = 3000;

  const total = subtotal + DELIVERY_FEE;

  return (
    <div className="cart">
      <div className="top">
        <div className="text-2xl cart-title">장바구니</div>
      </div>
      <div className="content-wrap">
        <LeftSide
          token={token}
          productList={productList}
          setProductList={setProductList}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          subtotal={subtotal}
          total={total}
          DELIVERY_FEE={DELIVERY_FEE}
        />
        <RightSide
          subtotal={subtotal}
          DELIVERY_FEE={DELIVERY_FEE}
          total={total}
          productList={productList}
        />
      </div>
    </div>
  );
};
export default Cart;
