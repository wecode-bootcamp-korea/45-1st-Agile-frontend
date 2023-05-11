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
      <img src={product.thumbnail} />
      <div className="product-title-option">
        <div className="product-title text-base">{product.title}</div>
        <div className="text-sm product-option">{product.subscribeCycle}</div>
      </div>
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
