import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TitleLine from '../../components/TitleLine/TitleLine';
import ProductListCont from './components/ProdcutListCont';
import ProductListNav from './components/ProductListNav';
import NavMain from '../../components/Nav/NavMain';
import './ProductList.scss';

const ProductList = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [subCategoryId, setSubCategoryId] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newCategoryId = queryParams.get('categoryId');
    const newSubCategoryId = queryParams.get('subCategoryId');
    setCategoryId(newCategoryId);
    setSubCategoryId(newSubCategoryId);
  }, [location.search]);

  return (
    <div className="product-list">
      <TitleLine />
      <NavMain />
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
