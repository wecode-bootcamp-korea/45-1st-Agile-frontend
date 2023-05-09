import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ProductListCont.scss';

const ProductListCont = ({ categoryId, subCategoryId }) => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://10.58.52.241:3000/books${location.search}`
          // `/data/books_category${categoryId}_subCategory${subCategoryId}_orderByNewBooks_limit8.json`
        );
        const data = await res.json();
        console.log(data.data);
        if (data.data) {
          setVisibleProducts(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [location]);

  // `http://10.58.52.241:3000/books${location.search}`
  //  setVisibleProducts(data.data);
  // [location]

  console.log(visibleProducts);
  if (visibleProducts.length === 0) return;

  return (
    <div className="product-list-cont">
      <div className="product-list">
        {visibleProducts.map((product, index) => (
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
              <div className="product-subtitle">{product.subtitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListCont;
