import React from 'react';
import './ProductItem.scss';

const ProductItem = ({
  product,
  setProductList,
  productList,
  setSelectedProducts,
  selectedProducts,
  handleQuantityChange,
  handleCheckboxChange,
  handleDeleteItem,
  subtotal,
}) => {
  return (
    <div className="normal-deliver-thing">
      <div className="normal-check">
        <input
          type="checkbox"
          checked={selectedProducts.includes(product.cartId)}
          onChange={e => handleCheckboxChange(product.cartId, e.target.checked)}
        />
      </div>
      <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fckk2n9%2Fbtseh8XtY4Z%2FbyMbN3ftovv3oUiL9vV8p0%2Fimg.png" />
      <div className="product-title">{product.title}</div>
      <div className="count">
        <button onClick={() => handleQuantityChange(product.cartId, -1)}>
          -
        </button>
        <div> {product.amount}</div>
        <button onClick={() => handleQuantityChange(product.cartId, 1)}>
          +
        </button>
      </div>
      <div className="product-price">
        {(product.price * product.amount).toLocaleString()}원
      </div>
      <button onClick={() => handleDeleteItem(product.cartId)}>x</button>
    </div>
  );
};

export default ProductItem;
