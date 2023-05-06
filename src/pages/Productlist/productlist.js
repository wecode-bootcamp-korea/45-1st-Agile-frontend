import React from 'react';
import { useLocation } from 'react-router-dom';
import TitleLine from '../../components/TitleLine/TitleLine';
import './ProductList.scss';
const ProductList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subCategoryId = queryParams.get('subCategoryId');

  return (
    <div className="mypage">
      <TitleLine />
      <video
        className="banner"
        autoPlay
        loop
        muted
        src={`images/productlist/productlist-${subCategoryId}.mp4`}
      />
    </div>
  );
};

export default ProductList;
