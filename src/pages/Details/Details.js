import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Contents from './components/Contents';
import APIS from '../../\bconfig';
import './Details.scss';

const Details = () => {
  const [productDetail, setProductDetail] = useState({});
  const [isLiked, setIsLiked] = useState('');
  const [productsInCart, setProductsInCart] = useState([]);
  const token = localStorage.getItem('token');
  const params = useParams();
  const id = params.id;
  console.log(productDetail);

  useEffect(() => {
    fetch(`${APIS.books}/${id}`)
      .then(res => res.json())
      .then(data => {
        setProductDetail(data.book);
        setIsLiked(data.getLike);
      })
      .catch(e => {
        console.error(e);
      });

    const fetchCartData = async () => {
      try {
        const res = await fetch(`${APIS.cartsb}`, {
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
    <>
      <Header />
      <div className="product-detail-page">
        <Contents
          productDetail={productDetail}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
          id={id}
          setProductsInCart={setProductsInCart}
          productsInCart={productsInCart}
          token={token}
        />
      </div>
    </>
  );
};
export default Details;
