import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductLineup.scss';

const ProductLineup = ({ categoryId, subCategoryId }) => {
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
    setVisibleProducts(extractedList);
  }, [extractedList]);

  const handlePrevClick = event => {
    event.preventDefault();
    event.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleNextClick = event => {
    event.preventDefault();
    event.stopPropagation();
    if (currentIndex + showCount < extractedList.length) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  if (visibleProducts.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="product-lineup">
      <button className="product-slider-prev" onClick={handlePrevClick} />
      <div className="product-slider-container">
        <div
          className="product-slider-track"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / extractedList.length)
            }%)`,
            width: `${100 * extractedList.length}%`,
          }}
        >
          {visibleProducts.map(product => (
            <Link key={product.id} to={`/books/${product.Key}`}>
              <div
                key={product.key}
                className="product-item"
                style={{ width: `${100 / extractedList.length}%` }}
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

      <button className="product-slider-next" onClick={handleNextClick} />
    </div>
  );
};

export default ProductLineup;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './ProductLineup.scss';

// const ProductLineup = ({ categoryId, subCategoryId }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showCount, setShowCount] = useState(4);
//   const [visibleProducts, setVisibleProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`books?categoryId=${categoryId}&subCategoryId=${subCategoryId}&orderBy=bestBooks&limit=10`);
//         const data = await res.json();
//         if (data) {
//           setVisibleProducts(data);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, [categoryId, subCategoryId]);

//   const handlePrevClick = event => {
//     event.preventDefault();
//     event.stopPropagation();
//     if (currentIndex > 0) {
//       setCurrentIndex(prevIndex => prevIndex - 1);
//     }
//   };

//   const handleNextClick = event => {
//     event.preventDefault();
//     event.stopPropagation();
//     if (currentIndex + showCount < visibleProducts.length) {
//       setCurrentIndex(prevIndex => prevIndex + 1);
//     }
//   };

//   if (visibleProducts.length === 0) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="product-lineup">
//       <button className="product-slider-prev" onClick={handlePrevClick} />
//       <div className="product-slider-container">
//         <div
//           className="product-slider-track"
//           style={{
//             transform: `translateX(-${
//               currentIndex * (100 / visibleProducts.length)
//             }%)`,
//             width: `${100 * visibleProducts.length}%`,
//           }}
//         >
//           {visibleProducts.map(product => (
//             <Link key={product.id} to={`/books/${product.Key}`}>
//               <div
//                 key={product.key}
//                 className="product-item"
//                 style={{ width: `${100 / visibleProducts.length}%` }}
//               >
//                 <img
//                   className="product-img"
//                   src={`images/main/booksimg/${product.Key}.png`}
//                   alt={product.title}
//                 />
//                 <div className="product-title">{product.title}</div>
//                 <div className="product-price">{product.price}원</div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <button className="product-slider-next" onClick={handleNextClick} />
//     </div>
//   );
// };

// export default ProductLineup;
//데이터 패칭시 적용할 코드
