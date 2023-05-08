import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from './Mainlayout';
import Contents from './components/Contents';
import './Details.scss';

const Details = () => {
  const [productDetail, setProductDetail] = useState({});
  const [productsInCart, setProductsInCart] = useState([]);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNTQxMjYyfQ.lVqVzJiczLrURF67hAW8Vf9SOcTgmiQbJmXX2jIPt_M';
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://10.58.52.241:3000/books/${id}`)
      .then(res => res.json())
      .then(data => {
        setProductDetail(data.book);
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
  }, [id]);

  if (!productDetail) return;
  console.log(productDetail);

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
