import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductListNav = ({ mainName, subName, otherSubCategories }) => {
  return (
    <div className="product-list-nav">
      <div className="main-name">{mainName}</div>
      <div className="sub-names">
        <div className="current-category">{subName}</div>
        {otherSubCategories.map(subCategory => (
          <NavLink
            key={subCategory.sub_category_id}
            to={`/books?categoryId=${subCategory.category_id}&subCategoryId=${subCategory.sub_category_id}&limit=9&orderBy=bestBooks&offset=0`}
            activeClassName="active"
          >
            {subCategory.sub_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProductListNav;
