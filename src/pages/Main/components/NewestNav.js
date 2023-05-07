import React, { useState, useEffect } from 'react';
import NewestProduct from './NewestProduct';
import './NewestNav.scss';

const SUBCATEGORIES = [
  { categoryId: 2, subCategoryId: 2, name: '성공/처세' },
  { categoryId: 2, subCategoryId: 3, name: '인간관계' },
  { categoryId: 4, subCategoryId: 6, name: '어학' },
  { categoryId: 4, subCategoryId: 7, name: '인적성/직무능력' },
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
    if (
      !loadedSubCategory ||
      loadedCategory.subCategoryId !== loadedSubCategory.subCategoryId
    ) {
      setLoadedSubCategory(loadedCategory);
    }
  }, [activeIndex]);

  return (
    <div className="newest-nav">
      <div className="newest-navbar">
        {SUBCATEGORIES.map((subCategory, index) => (
          <div
            key={subCategory.subCategoryId}
            className={`navbar-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleNavbarClick(index)}
          >
            {subCategory.name}
          </div>
        ))}
      </div>
      <div className="newest-product-container">
        {loadedSubCategory && (
          <NewestProduct
            categoryId={loadedSubCategory.categoryId}
            subCategoryId={loadedSubCategory.subCategoryId}
          />
        )}
      </div>
    </div>
  );
};

export default NewestNav;
