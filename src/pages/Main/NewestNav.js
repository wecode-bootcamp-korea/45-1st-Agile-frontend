import React, { useState, useEffect } from 'react';
import NewestProduct from './NewestProduct';
import './NewestNav.scss';

const subCategories = [
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
    const loadedCategory = subCategories[activeIndex];
    if (!loadedSubCategory || loadedCategory.id !== loadedSubCategory.id) {
      setLoadedSubCategory(loadedCategory);
    }
  }, [activeIndex]);

  return (
    <div className="newest-nav">
      <div className="newest-navbar">
        {subCategories.map((subCategory, index) => (
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
          subCategories.map(subCategory => (
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
