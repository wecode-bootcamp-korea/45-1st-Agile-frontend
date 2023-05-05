import React, { useState, useEffect } from 'react';
import NewestProduct from './NewestProduct';
import './NewestNav.scss';

const SUBCATEGORIES = [
  { id: 1, name: '구독상품' },
  { id: 2, name: '성공/처세' },
  { id: 3, name: '인간관계' },
];

const NewestNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedSubCategory, setLoadedSubCategory] = useState(null);

  const handleNavbarClick = index => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const loadedCategory = SUBCATEGORIES[activeIndex];
    if (!loadedSubCategory || loadedCategory.id !== loadedSubCategory.id) {
      setLoadedSubCategory(loadedCategory);
    }
  }, [activeIndex]);

  return (
    <div className="newest-nav">
      <div className="newest-navbar">
        {SUBCATEGORIES.map((subCategory, index) => (
          <div
            key={subCategory.id}
            className={`navbar-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleNavbarClick(index)}
          >
            {subCategory.name}
          </div>
        ))}
      </div>
      <div className="newest-product-container">
        {loadedSubCategory &&
          SUBCATEGORIES.map(subCategory => (
            <div
              key={subCategory.id}
              className={`newest-product ${
                subCategory.id === loadedSubCategory.id ? 'active' : ''
              }`}
            >
              {subCategory.id === loadedSubCategory.id && (
                <NewestProduct subCategoryId={subCategory.id} count={4} />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewestNav;

// import React, { useState, useEffect } from 'react';
// import NewestProduct from './NewestProduct';
// import './NewestNav.scss';

// const SUBCATEGORIES = [
//   { id: 1, name: '구독상품' },
//   { id: 2, name: '성공/처세' },
//   { id: 3, name: '인간관계' },
// ];

// const NewestNav = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [loadedSubCategory, setLoadedSubCategory] = useState(null);

//   const handleNavbarClick = index => {
//     if (index !== activeIndex) {
//       setActiveIndex(index);
//     }
//   };

//   useEffect(() => {
//     const loadedCategory = SUBCATEGORIES[activeIndex];
//     if (!loadedSubCategory || loadedCategory.id !== loadedSubCategory.id) {
//       setLoadedSubCategory(loadedCategory);
//     }
//   }, [activeIndex]);

//   return (
//     <div className="newest-nav">
//       <div className="newest-navbar">
//         {SUBCATEGORIES.map((subCategory, index) => (
//           <div
//             key={subCategory.id}
//             className={`navbar-item ${index === activeIndex ? 'active' : ''}`}
//             onClick={() => handleNavbarClick(index)}
//           >
//             {subCategory.name}
//           </div>
//         ))}
//       </div>
//       <div className="newest-product-container">
//         {loadedSubCategory &&
//           SUBCATEGORIES.map(subCategory => (
//             <div
//               key={subCategory.id}
//               className={`newest-product ${
//                 subCategory.id === loadedSubCategory.id ? 'active' : ''
//               }`}
//             >
//               {subCategory.id === loadedSubCategory.id && (
//                 <NewestProduct subCategoryId={subCategory.id} />
//               )}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default NewestNav;
//데이터 패칭시 사용할 코드
