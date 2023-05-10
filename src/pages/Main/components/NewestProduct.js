import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import APIS from '../../../config';
import './NewestPrdouct.scss';

const NewestProduct = ({ categoryId, subCategoryId }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(
      `${APIS.books}?categoryId=${categoryId}&subCategoryId=${subCategoryId}&orderBy=newBooks&limit=8`
    )
      .then(res => res.json())
      .then(data => {
        setProductList(data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [categoryId, subCategoryId]);

  return (
    <div className="newest-product">
      {productList.length > 0 &&
        productList.map(({ id, title, price }) => (
          <Link key={id} to={`/books/${id}`}>
            <div className="product-item">
              <img
                className="product-img"
                src={`images/main/booksimg/${id}.png`}
                alt={title}
              />
              <div className="product-title">{title}</div>
              <div className="product-price">
                {Number(price).toLocaleString()}원
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default NewestProduct;
