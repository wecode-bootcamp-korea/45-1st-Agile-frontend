import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ProductListNav.scss';

const ProductListNav = ({ mainName, subName, otherSubCategories }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentCategoryId = queryParams.get('categoryId');
  const currentSubCategoryId = queryParams.get('subCategoryId');
  const subCategories = [
    {
      sub_name: subName,
      sub_category_id: currentSubCategoryId,
      category_id: currentCategoryId,
    },
    ...otherSubCategories,
  ].sort((a, b) => a.sub_category_id - b.sub_category_id);

  return (
    <div className="product-list-nav">
      <div className="main-name">{mainName}</div>
      <div className="sub-names">
        {subCategories.map(subCategory => (
          <Link
            key={subCategory.sub_category_id}
            to={`/books?categoryId=${subCategory.category_id}&subCategoryId=${subCategory.sub_category_id}&limit=9&orderBy=bestBooks&offset=0`}
            className={
              subCategory.sub_category_id === currentSubCategoryId
                ? 'active'
                : 'inactive'
            }
          >
            {subCategory.sub_name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListNav;
