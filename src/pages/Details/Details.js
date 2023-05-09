import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Contents from './components/Contents';
import './Details.scss';

const Details = () => {
  const [productDetail, setProductDetail] = useState({});
  const [productsInCart, setProductsInCart] = useState([]);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNTQ1ODU2fQ.TwBTGjItzqb9JJ7wgX2LNFuvz8ngKdJ_9b00ACSI8i4';
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
    <>
      <Header />
      <div className="product-detail-page">
        <Contents
          productDetail={productDetail}
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
