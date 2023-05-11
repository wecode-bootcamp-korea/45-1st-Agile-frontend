import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftSide from './Components/LeftSide';
import RightSide from './Components/RightSide';
import Blank from './Components/Blank';
import './Cart.scss';
const Cart = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNzcyODU0fQ.qfyufQ0x5-KVbspoy2Vv6zuUB9bJlCJ8fcaxj9cwLfk';

  useEffect(() => {
    fetch('http://10.58.52.196:3000/carts', {
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

  if (productList.length === 0) return <Blank />;

  const selectedList = selectedProducts.map(number =>
    productList.filter(product => number === product.cartId)
  );

  const result = selectedList.map((list, index) => ({
    title: list[0].title,
    price: list[0].price,
    isSubscribe: list[0].isSubscribe,
    quantity: list[0].amount,
  }));
  const productsInfo = {
    mode: true,
    data: result,
    cartIds: selectedProducts,
  };

  const handleBuyingButton = () => {
    if (selectedList.length > 0) {
      navigate('/payment', {
        state: { productsInfo },
      });
    } else {
      alert('선택된 상품이 없습니다.');
    }
  };
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
          handleBuyingButton={handleBuyingButton}
        />
      </div>
    </div>
  );
};
export default Cart;
