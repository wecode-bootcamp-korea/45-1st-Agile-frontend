import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Contents from './components/Contents';
import APIS from '../../config';
import './Details.scss';
import MainLayout from './Mainlayout';

const Details = () => {
  const [productDetail, setProductDetail] = useState({});
  const [productsInCart, setProductsInCart] = useState([]);
  const token = localStorage.getItem('token');
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://10.58.52.241:3000/books/${id}`)
      .then(res => res.json())
      .then(data => {
        setProductDetail(data);
      })
      .catch(e => {
        console.error(e);
      });

    const fetchCartData = async () => {
      try {
        const res = await fetch('http://10.58.52.241:3000/carts', {
          headers: {
            'content-Type': 'application/json;charset=utf-8',
            Authorization: token,
          },
        });
        const data = await res.json();
        setProductsInCart(data.data);
      } catch (e) {
        console.error(e);
      }
    };

    if (token) fetchCartData();
  }, [id, token]);

  if (!productDetail) return;

  return (
    <MainLayout>
      <div className="product-detail-page">
        <Contents
          productDetail={productDetail}
          id={id}
          setProductsInCart={setProductsInCart}
          productsInCart={productsInCart}
          token={token}
        />
      </div>
    </MainLayout>
  );
};
export default Details;
