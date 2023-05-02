import React from 'react';
import Header from '../../components/Header/Header';
import Contents from './components/Contents';
import './Details.scss';

const Details = () => {
  return (
    <>
      <Header />
      <div className="product-detail-page">
        <Contents />
      </div>
    </>
  );
};
export default Details;
