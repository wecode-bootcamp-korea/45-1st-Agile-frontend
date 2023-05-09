import React, { useState, useEffect } from 'react';
import LeftSide from './Components/LeftSide';
import RightSide from './Components/RightSide';
import './Cart.scss';
const Cart = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);

  useEffect(() => {
    fetch('/data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data.map(product => ({ ...product, quantity: 1 })));
        setSelectedProducts(data.map(product => product.Key));
      });
  }, []);

  const handleTotalChange = newTotal => {
    setTotal(newTotal);
    setSubtotal(newTotal);
  };
  return (
    <div className="cart">
      <div className="top">
        <div className="text-2xl cart-title">장바구니</div>
      </div>
      <div className="content-wrap">
        <LeftSide
          onTotalChange={handleTotalChange}
          productList={productList}
          setProductList={setProductList}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
        <RightSide
          total={total}
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          productList={productList}
          setProductList={setProductList}
        />{' '}
      </div>
    </div>
  );
};
export default Cart;
