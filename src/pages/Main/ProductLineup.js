import React, { useState, useEffect } from 'react';

const ProductLineup = ({ subCategoryId }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
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

  const randomProducts = getFilteredProducts(productList, subCategoryId, 4);

  return (
    <div className="product-lineup">
      {randomProducts.map(product => (
        <div key={product.Key} className="product-item">
          {/* <img
            src={`images/main/booksimg/${product.Key}.avif`}
            alt={product.title}
          /> */}
          <p>{product.title}</p>
          <p>{product.price}원</p>
        </div>
      ))}
    </div>
  );
};

export default ProductLineup;
