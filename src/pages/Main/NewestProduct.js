import React, { useState, useEffect } from 'react';

const NewestProduct = ({ subCategoryId, count }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(getFilteredProducts(data, subCategoryId, count));
      });
  }, [subCategoryId, count]);

  const getFilteredProducts = (products, subCategoryId, count) => {
    // sub_category_id가 subCategoryId인 상품들만 필터링합니다.
    const filteredProducts = products.filter(
      product => product.sub_category_id === subCategoryId
    );

    // 상품 리스트에서 최신작을 기준으로 count개를 선택합니다.
    const latestProducts = filteredProducts
      .sort((a, b) => new Date(b.issue_date) - new Date(a.issue_date)) // 발행일을 기준으로 최신순으로 정렬합니다.
      .slice(0, count);

    return latestProducts;
  };

  return (
    <div className="newest-product">
      {productList.map(product => (
        <div key={product.Key} className="product-item">
          <img
            className="product-img"
            src={`images/main/booksimg/${product.Key}.png`}
            alt={product.title}
          />
          <div className="product-title">{product.title}</div>
          <div className="prduct-price">{product.price}원</div>
        </div>
      ))}
    </div>
  );
};

export default NewestProduct;