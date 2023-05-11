import React from 'react';
import './OrderProducts.scss';

const OrderProducts = ({ data }) => {
  return (
    <div className="order-products">
      <img alt="구매상품" src={data.thumbnail} width="90" />
      <div className="products-main">
        {PRODUCT_INFO.map(ele => {
          return (
            <div key={ele.id} className="products-info">
              <div className="title-att">{ele.title}</div>
              <div className="title-name">
                {data[ele.type]?.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderProducts;

const PRODUCT_INFO = [
  { id: 1, title: '상품명', type: 'title' },
  { id: 2, title: '결제금액', type: 'price' },
  { id: 3, title: '수량', type: 'amount' },
];
