import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Contents from './components/Contents';
import './Details.scss';

const Details = () => {
  const [productDetail, setProductDetail] = useState(null);

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
      });
  }, [id]);

  if (!productDetail) return <></>;

  return (
    <>
      <Header />
      <div className="product-detail-page">
        <Contents productDetail={productDetail} id={id} />
      </div>
    </>
  );
};
export default Details;
