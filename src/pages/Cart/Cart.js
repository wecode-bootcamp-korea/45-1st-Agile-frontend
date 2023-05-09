import React, { useState, useEffect } from 'react';
import Top from './Components/Top';
import Product from './Components/Product';
import OrderInfo from './Components/OrderInfo';
import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);
  const [checkItems, setCheckItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0); //배송비 합친가격
  const [subtotal, setSubtotal] = useState(0); //제품가격
  const [deliveryFee, setDeliveryFee] = useState(0);
  //productList를 props로 Product와 OrderInfo ,Count 로 내려줘야합니다.

  const handleTotalChange = newTotal => {
    setTotal(newTotal);
    setSubtotal(newTotal);
  };

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
      <Top />
      <div className="content-wrap">
        <Product
          handleAllCheck={handleAllCheck}
          handleSingleCheck={handleSingleCheck}
          productList={productList}
          setProductList={setProductList}
          checkItems={checkItems}
          setCheckItems={setCheckItems}
          quantity={quantity}
          setQuantity={setQuantity}
        />

        <div className="order-info">
          <OrderInfo
            productList={productList}
            setProductList={setProductList}
          />
        </div>
      </div>
    </div>
  );
};
export default Cart;
