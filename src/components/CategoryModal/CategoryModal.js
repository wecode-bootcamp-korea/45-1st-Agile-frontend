import React from 'react';
import { Link } from 'react-router-dom';
import CATEGORY from '../../pages/Main/components/CATEGORY';
import './CategoryModal.scss';

const CategoryModal = () => {
  return (
    <div className="category-modal">
      {CATEGORY.map(category => (
        <div className="modal-container" key={category.subCategory_id}>
          <Link
            to={`/productlist?categoryId=${category.category_id}&subCategoryId=${category.subCategory_id}&limit=9&orderBy=countLikes&offset=0`}
          >
            <img
              src={`/images/components/categorymodal/${category.imgW}`}
              alt={category.sub_name}
            />
            <p>{category.sub_name}</p>
            {category.sub.map(list => {
              return;
            })}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryModal;
