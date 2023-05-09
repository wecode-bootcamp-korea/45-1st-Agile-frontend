import React, { useState, useEffect } from 'react';
import './LeftSide.scss';

const LeftSide = ({
  onTotalChange,
  productList,
  setProductList,
  selectedProducts,
  setSelectedProducts,
}) => {
  // const [productList, setProductList] = useState([]);
  // const [selectedProducts, setSelectedProducts] = useState([]);
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    // 사용자 토큰 가져오기
    const token = localStorage.getItem('userToken');
    setUserToken(token);
  }, []);

  // useEffect(() => {
  //   fetch('/data/cartData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setProductList(data.map(product => ({ ...product, quantity: 1 })));
  //       setSelectedProducts(data.map(product => product.Key));
  //     });
  // }, []);

  const handleQuantityChange = (key, value) => {
    setProductList(
      productList.map(product =>
        product.Key === key && selectedProducts.includes(key)
          ? { ...product, quantity: Math.max(1, product.quantity + value) }
          : product
      )
    );

    // PATCH 메서드로 상품 수량 변경 요청 보내기
    fetch(`/carts?cartId=${key}&amount=${value}`, {
      method: 'PATCH',
      headers: {
        userToken: userToken,
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  const handleDelete = () => {
    selectedProducts.forEach(key => {
      // DELETE 메서드로 상품 삭제 요청 보내기
      fetch(`/carts?cartId=${key}`, {
        method: 'DELETE',
        headers: {
          userToken: userToken,
        },
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    });

    // 선택한 상품들 제거하기
    setProductList(
      productList.filter(product => !selectedProducts.includes(product.Key))
    );
    setSelectedProducts([]);
  };

  const handleDeleteItem = key => {
    // DELETE 메서드로 상품 삭제 요청 보내기
    fetch(`/carts?cartId=${key}`, {
      method: 'DELETE',
      headers: {
        userToken: userToken,
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    // 선택한 상품 제거하기
    setProductList(productList.filter(product => product.Key !== key));
    setSelectedProducts(
      selectedProducts.filter(selectedKey => selectedKey !== key)
    );
  };

  useEffect(() => {
    const subtotal = productList
      .filter(product => selectedProducts.includes(product.Key))
      .map(product => product.price * product.quantity)
      .reduce((acc, price) => acc + price, 0);
    const deliveryFee = subtotal < 40000 ? 3000 : 0;
    const total = subtotal + deliveryFee;
    onTotalChange({ subtotal, total, deliveryFee }); // subtotal값도 전달하도록 수정
  }, [productList, selectedProducts, onTotalChange]);

  const handleCheckboxChange = (key, isChecked) => {
    if (key === 'all') {
      setSelectedProducts(
        isChecked ? productList.map(product => product.Key) : []
      );
    } else {
      setSelectedProducts(
        isChecked
          ? [...selectedProducts, key]
          : selectedProducts.filter(selectedKey => selectedKey !== key)
      );
    }
  };

  const subtotal = productList
    .filter(product => selectedProducts.includes(product.Key))
    .map(product => product.price * product.quantity)
    .reduce((acc, price) => acc + price, 0);

  const deliveryFee = subtotal < 40000 ? 3000 : 0;

  const total = subtotal + deliveryFee;

  return (
    <div className="left-side">
      <div className="check-box-controller">
        <input
          type="checkbox"
          checked={selectedProducts.length === productList.length}
          onChange={e => handleCheckboxChange('all', e.target.checked)}
        />
        <div className="text-left">
          <span className="select-all">전체선택</span>
          <span className="division">|</span>
          <span className="select-delete" onClick={handleDelete}>
            선택삭제
          </span>
        </div>
      </div>
      <div className="normal-delivery">일반배송</div>
      <div className="normal-deliver-things">
        {productList.map(product => (
          <div className="normal-deliver-thing" key={product.key}>
            <div className="normal-check">
              <input
                type="checkbox"
                checked={selectedProducts.includes(product.Key)}
                onChange={e =>
                  handleCheckboxChange(product.Key, e.target.checked)
                }
              />
            </div>
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fckk2n9%2Fbtseh8XtY4Z%2FbyMbN3ftovv3oUiL9vV8p0%2Fimg.png" />
            <div className="product-title">{product.title}</div>
            <div className="buttons">
              <button onClick={() => handleQuantityChange(product.Key, -1)}>
                -
              </button>
              <div> {product.quantity}</div>
              <button onClick={() => handleQuantityChange(product.Key, 1)}>
                +
              </button>
            </div>
            <div className="product-price">{product.price}</div>
            <button onClick={() => handleDeleteItem(product.Key)}>x</button>
          </div>
        ))}{' '}
      </div>
      <div className="amount">
        제품가격 {subtotal} 원 + 배송비 {deliveryFee ? deliveryFee : '0'} 원 ={' '}
        {total} 원
      </div>
    </div>
  );
};
export default LeftSide;
