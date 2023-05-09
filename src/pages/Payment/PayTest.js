import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PayTest = () => {
  const navigate = useNavigate();

  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    fetch('/data/orderItemsData.json')
      .then(res => res.json())
      .then(data => {
        setProductsInfo(data);
      });
  }, []);

  const handlePaymentClick = () => {
    console.log('click');
    navigate('/payment', {
      state: { productsInfo },
    });
  };

  return (
    <div className="pay-test">
      <div>테스트!</div>
      <button onClick={handlePaymentClick}>구매하기</button>
    </div>
  );
};

export default PayTest;
