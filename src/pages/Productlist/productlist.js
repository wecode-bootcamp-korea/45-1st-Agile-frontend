import React from 'react';
import { useLocation } from 'react-router-dom';
import TitleLine from '../../components/TitleLine/TitleLine';
import ProductListCont from './components/ProdcutListCont';
import CATEGORY from '../Main/components/CATEGORY';
import ProductListNav from './components/ProductListNav';
import NavSub from '../../components/Nav/Nav-sub';
import './ProductList.scss';

const ProductList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = parseInt(queryParams.get('categoryId'));
  const subCategoryId = parseInt(queryParams.get('subCategoryId'));
  const category = CATEGORY.find(
    c => c.category_id === categoryId && c.subCategory_id === subCategoryId
  );
  const mainName = category.main_name;
  const subName = category.sub_name;

  const subCategories = CATEGORY.filter(c => c.category_id === categoryId).map(
    c => ({
      category_id: c.category_id,
      sub_name: c.sub_name,
      sub_category_id: c.subCategory_id,
    })
  );
  const mainSubCategoryId = category.subCategory_id;
  const otherSubCategories = subCategories.filter(
    c => c.sub_category_id !== mainSubCategoryId
  );

  return (
    <div className="mypage">
      <TitleLine />
      <NavSub />
      <video
        className="banner"
        autoPlay
        loop
        muted
        src={`images/productlist/productlist-${subCategoryId}.mp4`}
      />
      <ProductListNav
        mainName={mainName}
        categoryId={categoryId}
        subName={subName}
        otherSubCategories={otherSubCategories}
        subCategoryId={subCategoryId}
      />

      <ProductListCont categoryId={categoryId} subCategoryId={subCategoryId} />
    </div>
  );
};

export default ProductList;
