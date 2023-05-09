import React from 'react';
import TitleLine from '../../components/TitleLine/TitleLine';
import ProductListCont from './components/ProdcutListCont';
import ProductListNav from './components/ProductListNav';
import NavSub from '../../components/Nav/NavSub';
import './ProductList.scss';

const ProductList = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const categoryId = queryParams.get('categoryId');
  const subCategoryId = queryParams.get('subCategoryId');

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
      <ProductListNav categoryId={categoryId} subCategoryId={subCategoryId} />

      <ProductListCont categoryId={categoryId} subCategoryId={subCategoryId} />
    </div>
  );
};

export default ProductList;
