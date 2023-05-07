import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NewestPrdouct.scss';

const NewestProduct = ({ categoryId, subCategoryId }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(`/backend/api/endpoint`) // 백엔드 API 엔드포인트
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      })
      .catch(error => {
        console.log(error);
        fetch(
          `/data/books_category${categoryId}_subCategory${subCategoryId}_orderByNewBooks_limit8.json`
        ) // 목데이터 경로
          .then(res => res.json())
          .then(data => {
            setProductList(data);
          });
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
