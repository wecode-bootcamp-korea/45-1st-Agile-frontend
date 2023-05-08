import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductListCont.scss';

const ProductListCont = ({ categoryId, subCategoryId }) => {
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/data/books_category${categoryId}_subCategory${subCategoryId}_orderByNewBooks_limit8.json`
        );
        const data = await res.json();
        if (data) {
          setVisibleProducts(data);
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [categoryId, subCategoryId]);
  // `http://10.58.52.241:3000/books?categoryId=${categoryId}&subCategoryId=${subCategoryId}&orderBy=bestBooks&limit=9`
  //  setVisibleProducts(data.data);
  if (visibleProducts.length === 0) return <div>Loading...</div>;

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
              <div className="product-price">{product.price}원</div>
              <div className="product-subtitle">{product.subtitle}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListCont;
