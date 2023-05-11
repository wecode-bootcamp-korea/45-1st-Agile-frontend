import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CATEGORY from '../../Main/components/CATEGORY';
import './ProductListNav.scss';

const ProductListNav = ({ categoryId, subCategoryId }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [currentCategoryId, setCurrentCategoryId] = useState(
    queryParams.get('categoryId')
  );
  const [currentSubCategoryId, setCurrentSubCategoryId] = useState(
    queryParams.get('subCategoryId')
  );

  const category = CATEGORY.find(
    c =>
      c.category_id === Number(categoryId) &&
      c.subCategory_id === Number(subCategoryId)
  );

  const mainName = category ? category.main_name : '';

  const subCategories = CATEGORY.filter(
    c => c.category_id === Number(categoryId)
  ).map(c => ({
    category_id: c.category_id,
    sub_name: c.sub_name,
    sub_category_id: c.subCategory_id,
  }));
  const mainSubCategoryId = category ? category.subCategory_id : null;
  const otherSubCategories = subCategories.filter(
    c => c.sub_category_id !== mainSubCategoryId
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newCategoryId = queryParams.get('categoryId');
    const newSubCategoryId = queryParams.get('subCategoryId');

    if (
      newCategoryId !== currentCategoryId ||
      newSubCategoryId !== currentSubCategoryId
    ) {
      setCurrentCategoryId(newCategoryId);
      setCurrentSubCategoryId(newSubCategoryId);
    }
  }, [location.search, currentCategoryId, currentSubCategoryId]);

  return (
    <div className="product-list-nav">
      <div className="main-name">{mainName}</div>
      <div className="sub-names">
        <Link
          to={`/productlist?categoryId=${currentCategoryId}&limit=9&orderBy=countLikes&offset=0`}
          style={{ textDecoration: 'none' }}
        >
          <div className={!currentSubCategoryId ? 'active' : 'inactive'}>
            전체보기
          </div>
        </Link>
        {subCategories.map(subCategory => (
          <Link
            key={subCategory.sub_category_id}
            to={`/productlist?categoryId=${subCategory.category_id}&subCategoryId=${subCategory.sub_category_id}&limit=9&orderBy=countLikes&offset=0`}
            style={{ textDecoration: 'none' }}
            className={
              subCategory.category_id === parseInt(currentCategoryId) &&
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
