import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CATEGORY from '../../pages/Main/components/CATEGORY';
import './CategoryModalNav.scss';

const CategoryModalNav = ({
  showSubCategoryModal,
  setShowSubCategoryModal,
}) => {
  const mainCategories = CATEGORY.filter(
    (category, index, self) =>
      !category.sub_category_id &&
      index === self.findIndex(c => c.category_id === category.category_id)
  );

  const [selectedMainCategory, setSelectedMainCategory] = useState(false);

  const handleSubCategoryMouseEnter = () => {
    setShowSubCategoryModal(true);
  };

  const handleSubCategoryMouseLeave = () => {
    if (selectedMainCategory) {
      const subCategories = CATEGORY.filter(
        subCategory =>
          subCategory.subCategory_id &&
          subCategory.category_id === selectedMainCategory.category_id
      );
      const isIncluded = subCategories.some(
        subCategory =>
          subCategory.subCategory_id === selectedMainCategory.subCategory_id
      );
      if (!isIncluded) {
        setShowSubCategoryModal(false);
      }
    } else {
      setShowSubCategoryModal(false);
    }
  };

  return (
    <div
      className="category-modal-nav"
      onMouseEnter={handleSubCategoryMouseEnter}
      onMouseLeave={handleSubCategoryMouseLeave}
    >
      {mainCategories.map(mainCategory => (
        <div
          className="modal-container main-category"
          key={mainCategory.category_id}
          onMouseEnter={() => setSelectedMainCategory(mainCategory)}
          onMouseLeave={() => setSelectedMainCategory(null)}
        >
          <Link
            style={{ textDecoration: 'none' }}
            to={`/productlist?categoryId=${mainCategory.category_id}&limit=9&orderBy=&offset=0`}
          >
            <img
              src={`/images/components/categorymodal/${mainCategory.imgW}`}
              alt={mainCategory.main_name}
            />
            <p>{mainCategory.main_name}</p>
          </Link>
          {selectedMainCategory &&
            selectedMainCategory.category_id === mainCategory.category_id && (
              <div
                className={`sub-category-dropdown ${
                  showSubCategoryModal ? 'show' : ''
                }`}
              >
                {CATEGORY.filter(
                  subCategory =>
                    subCategory.subCategory_id &&
                    subCategory.category_id === selectedMainCategory.category_id
                ).map(subCategory => (
                  <div
                    className="sub-modal-container"
                    key={subCategory.sub_category_id}
                  >
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={`/productlist?categoryId=${subCategory.category_id}&subCategoryId=${subCategory.subCategory_id}&limit=9&orderBy=&offset=0`}
                    >
                      <img
                        src={`/images/components/categorymodal/${subCategory.imgW}`}
                        alt={subCategory.sub_name}
                      />
                      <p>{subCategory.sub_name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default CategoryModalNav;
