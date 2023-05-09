import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ProductListCont.scss';

const ProductListCont = ({ categoryId, subCategoryId }) => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [booksCount, setBooksCount] = useState(0);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://10.58.52.241:3000/books${location.search}`
        );
        const data = await res.json();
        console.log(data);
        if (data.data) {
          setVisibleProducts(data.data);
        }
        if (data.booksCount) {
          setBooksCount(data.booksCount[0].booksCount);
        }
        const currentPage =
          parseInt(new URLSearchParams(location.search).get('offset'), 10) / 9 +
            1 || 1;
        const totalPages = Math.ceil(booksCount / 9);
        const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        setCurrentPage(currentPage);
        setPages(pages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [booksCount, location.search]);

  const handlePageClick = page => {
    const offset = (page - 1) * 9;
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('offset', offset);
    window.location.search = searchParams.toString();
    setCurrentPage(page);
  };
  const sortOptions = [
    { value: 'likesCount', label: '추천순' },
    { value: 'newBooks', label: '신상품순' },
    { value: 'priceAsc', label: '낮은 가격순' },
    { value: 'priceDesc', label: '높은 가격순' },
  ];

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
      <div className="pagination-container">
        <div className="pagination">
          {pages.map(page => (
            <button
              key={page}
              className={`pagination-button ${
                currentPage === page ? 'active' : ''
              }`}
              onClick={() => {
                handlePageClick(page);
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListCont;
