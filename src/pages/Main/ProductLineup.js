import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductLineup = ({ subCategoryId, count }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(getFilteredProducts(data, subCategoryId, count));
      });
  }, []);

  const getFilteredProducts = (products, subCategoryId, count) => {
    // sub_category_id가 subCategoryId인 상품들만 필터링합니다.
    const filteredProducts = products.filter(
      product => product.sub_category_id === subCategoryId
    );

    // 상품 리스트에서 랜덤으로 count개를 선택합니다.
    const randomProducts = [];
    while (randomProducts.length < count) {
      const randomIndex = Math.floor(Math.random() * filteredProducts.length);
      const product = filteredProducts[randomIndex];
      if (!randomProducts.includes(product)) {
        randomProducts.push(product);
      }
    }

    return randomProducts;
  };

  return (
    <div className="product-lineup">
      {productList.map(product => (
        <Link key={product.id} to={`/books/${product.Key}`}>
          <div key={product.Key} className="product-item">
            <img
              className="product-img"
              src={`images/main/booksimg/${product.Key}.png`}
              alt={product.title}
            />
            <div className="product-title">{product.title}</div>
            <div className="prduct-price">{product.price}원</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductLineup;
