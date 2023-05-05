import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductLineup = ({ subCategoryId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCount, setShowCount] = useState(4);
  const [extractedList, setExtractedList] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/data.json');
        const data = await res.json();
        if (data) {
          const filteredBooks = data.filter(
            book => book.sub_category_id === subCategoryId
          );
          const sortedBooks = filteredBooks.sort((a, b) => a.price - b.price);
          setExtractedList(sortedBooks);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [subCategoryId]);

  useEffect(() => {
    if (extractedList.length === 0) {
      return;
    }

    const startIndex = Math.min(currentIndex, extractedList.length - showCount);
    const newVisibleProducts = extractedList.slice(
      startIndex,
      startIndex + showCount
    );
    setVisibleProducts(newVisibleProducts);

    return () => {
      document.removeEventListener('click', handlePrevClick);
      document.removeEventListener('click', handleNextClick);
    };
  }, [extractedList, showCount]);

  const handlePrevClick = event => {
    event.preventDefault(); // 이벤트 전파 막기
    event.stopPropagation(); // 이벤트 전파 막기
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleNextClick = event => {
    event.preventDefault(); // 이벤트 전파 막기
    event.stopPropagation(); // 이벤트 전파 막기
    if (currentIndex + showCount < extractedList.length) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  if (visibleProducts.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="product-lineup">
      <div className="product-slider-container">
        <div
          className="product-slider-track"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / visibleProducts.length)
            }%)`,
            width: `${100 * visibleProducts.length}%`,
          }}
        >
          {visibleProducts.map(product => (
            <Link key={product.id} to={`/books/${product.Key}`}>
              <div
                key={product.key}
                className="product-item"
                style={{ width: `${100 / visibleProducts.length}%` }}
              >
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
      </div>
      <div className="product-slider-controls">
        <button className="product-slider-prev" onClick={handlePrevClick}>
          이전내용
        </button>
        <button className="product-slider-next" onClick={handleNextClick}>
          다음내용
        </button>
      </div>
    </div>
  );
};

export default ProductLineup;
