import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CATEGORY from '../../Main/components/CATEGORY';
import './ProductListNav.scss';

const ProductListNav = ({ categoryId, subCategoryId }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentCategoryId = queryParams.get('categoryId');
  const currentSubCategoryId = queryParams.get('subCategoryId');

  const category = CATEGORY.find(
    c =>
      c.category_id === Number(categoryId) &&
      c.subCategory_id === Number(subCategoryId)
  );

  const mainName = category.main_name;

  const subCategories = CATEGORY.filter(
    c => c.category_id === Number(categoryId)
  ).map(c => ({
    category_id: c.category_id,
    sub_name: c.sub_name,
    sub_category_id: c.subCategory_id,
  }));
  const mainSubCategoryId = category.subCategory_id;
  const otherSubCategories = subCategories.filter(
    c => c.sub_category_id !== mainSubCategoryId
  );

  return (
    <div className="product-list-nav">
      <div className="main-name">{mainName}</div>
      <div className="sub-names">
        <Link
          to={`/productlist?categoryId=${currentCategoryId}&limit=9&orderBy=countLikes&offset=0`}
        >
          <div className={!currentSubCategoryId ? 'active' : 'inactive'}>
            전체보기
          </div>
        </Link>
        {subCategories.map(subCategory => (
          <Link
            key={subCategory.sub_category_id}
            to={`/productlist?categoryId=${subCategory.category_id}&subCategoryId=${subCategory.sub_category_id}&limit=9&orderBy=countLikes&offset=0`}
            className={
              subCategory.sub_category_id === parseInt(currentSubCategoryId)
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
