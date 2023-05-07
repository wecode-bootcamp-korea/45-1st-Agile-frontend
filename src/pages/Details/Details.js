import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from './Mainlayout';
import Contents from './components/Contents';
import './Details.scss';

const Details = () => {
  const [productDetail, setProductDetail] = useState({});
  const [productsInCart, setProductsInCart] = useState([]);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch('/data/data2.json')
      .then(res => res.json())
      .then(data => {
        setProductDetail(data[id]);
      })
      .catch(e => {
        console.error(e);
        fetch(`http://10.58.52.146:3000/books/${id}`);
      });
  }, [id]);

  if (!productDetail) return;

  return (
    <MainLayout>
      <div className="product-detail-page">
        <Contents
          productDetail={productDetail}
          id={id}
          setProductsInCart={setProductsInCart}
          productsInCart={productsInCart}
        />
      </div>
    </MainLayout>
  );
};
export default Details;
