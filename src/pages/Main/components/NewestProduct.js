import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NewestPrdouct.scss';

const NewestProduct = ({ categoryId, subCategoryId }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(
      `/data/books_category${categoryId}_subCategory${subCategoryId}_orderByNewBooks_limit8.json`
    )
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, [categoryId, subCategoryId]);

  return (
    <div className="newest-product">
      {productList.map(product => (
        <Link key={product.Key} to={`/books/${product.Key}`}>
          <div key={product.Key} className="product-item">
            <img
              className="product-img"
              src={`images/main/booksimg/${product.Key}.png`}
              alt={product.title}
            />
            <div className="product-title">{product.title}</div>
            <div className="product-price">{product.price}원</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewestProduct;
