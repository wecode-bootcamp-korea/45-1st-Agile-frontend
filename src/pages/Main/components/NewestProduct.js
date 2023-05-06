import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NewestPrdouct.scss';

const NewestProduct = ({ subCategoryId }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(getFilteredProducts(data, subCategoryId));
      });
  }, [subCategoryId]);

  const getFilteredProducts = (products, subCategoryId) => {
    // sub_category_id가 subCategoryId인 상품들만 필터링합니다.
    const filteredProducts = products.filter(
      product => product.sub_category_id === subCategoryId
    );

    // 상품 리스트에서 최신작을 기준으로 count개를 선택합니다.
    const latestProducts = filteredProducts
      .sort((a, b) => new Date(b.issue_date) - new Date(a.issue_date)) // 발행일을 기준으로 최신순으로 정렬합니다.
      .slice(0, 8);

    return latestProducts;
  };

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
            <div className="prduct-price">{product.price}원</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewestProduct;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './NewestPrdouct.scss';

// const NewestProduct = ({ categoryId, subCategoryId }) => {
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     fetch(`/books?categoryId=${categoryId}&subCategoryId=${subCategoryId}&orderBy=newBooks&limit=8`)
//       .then(res => res.json())
//       .then(data => {
//         setProductList(data);
//       });
//   }, [categoryId, subCategoryId]);

//   return (
//     <div className="newest-product">
//       {productList.map(product => (
//         <Link key={product.Key} to={`/books/${product.Key}`}>
//           <div key={product.Key} className="product-item">
//             <img
//               className="product-img"
//               src={`images/main/booksimg/${product.Key}.png`}
//               alt={product.title}
//             />
//             <div className="product-title">{product.title}</div>
//             <div className="product-price">{product.price}원</div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default NewestProduct;
//패칭시 사용할코드
