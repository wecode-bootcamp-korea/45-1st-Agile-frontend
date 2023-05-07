import React from 'react';
import { Link } from 'react-router-dom';
import CATEGORY from '../../pages/Main/components/CATEGORY';
import './CategoryModalNav.scss';
const CategoryModalNav = () => {
  return (
    <div className="category-modal-nav">
      {CATEGORY.map(category => (
        <div className="modal-container" key={category.subCategory_id}>
          <Link
            to={`/books?categoryId=${category.category_id}&subCategoryId=${category.subCategory_id}&limit=9&orderBy=bestBooks&offset=0`}
          >
            <img
              src={`/images/components/categorymodal/${category.imgW}`}
              alt={category.sub_name}
            />
            <p>{category.sub_name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryModalNav;
