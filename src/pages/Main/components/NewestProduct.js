import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NewestPrdouct.scss';

const NewestProduct = ({ categoryId, subCategoryId }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(
      // `/data/books_category${categoryId}_subCategory${subCategoryId}_orderByNewBooks_limit8.json`
      `http://10.58.52.241:3000/books?categoryId=${categoryId}&subCategoryId=${subCategoryId}&orderBy=newBooks&limit=8`
    )
      .then(res => res.json())
      .then(data => {
        setProductList(data.data);
      })

      .catch(error => {
        console.log(error);
      });
  }, [categoryId, subCategoryId]);

  // `http://10.58.52.241:3000/books?categoryId=${categoryId}&subCategoryId=${subCategoryId}&orderBy=newBooks&limit=9`
  //  setVisibleProducts(data.data);
  return (
    <div className="newest-product">
      {productList.length > 0 &&
        productList.map(product => (
          <Link key={product.id} to={`/books/${product.id}`}>
            <div className="product-item">
              <img
                className="product-img"
                src={`images/main/booksimg/${product.id}.png`}
                alt={product.title}
              />
              <div className="product-title">{product.title}</div>
              <div className="product-price">
                {Number(product.price).toLocaleString()}원
              </div>
              <button className="to-cart" />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default NewestProduct;
