import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import ProductInformation from './ProductInformation';
import WishlistButton from './WishlistButton';
import ShareButton from './ShareButton';
import QuantityBox from './QuantityBox';
import ShippingInfo from './ShippingInfo';
import SubscribeOptions from './SubscribeOptions';
import './Contents.scss';
import CartModal from './CartModal';

const Contents = ({
  productDetail,
  setProductsInCart,
  productsInCart,
  id,
  token,
}) => {
  const {
    title,
    subtitle,
    price,
    issueDate,
    isSubscribe,
    image,
    description,
    author,
    subCategoryId,
    isLiked,
  } = productDetail;

  const [count, setCount] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const bookId = parseInt(id);
  const productsInfo = [
    {
      item: { id: id },
      quauntity: count,
    },
  ];

  const totalPrice = price * count;

  const openCartModal = () => {
    setModalOpen(true);
  };

  const totalPriceInCart = productsInCart.reduce((total, element) => {
    return total + Number(element.price) * Number(element.amount);
  }, 0);

  const addToCart = () => {
    fetch('http://10.58.52.241:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({ bookId: bookId, amount: count, isSubscribe: 0 }),
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(1);
        resolve();
      }, 2000);
    });
  };

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

  const handleCartClick = async () => {
    try {
      openCartModal();

      if (token) {
        await addToCart();
        await fetchCartData();
      } else {
        navigate('/login');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handlePaymentClick = () => {
    navigate('/payment', {
      state: { productsInfo },
    });
  };

  return (
    <div className="contents">
      <div className="contents-area">
        <div className="thumbnail">
          <img
            className="product-img"
            alt=""
            src="/images/details/book-sample.png"
          />
        </div>
        <div className="product-info">
          <div className="product-title">
            <div>{title}</div>
            <div className="product-actions">
              <WishlistButton id={id} isLiked={isLiked} />
              <ShareButton />
            </div>
          </div>
          <div className="book-meta text-sm">
            <div className="book-author">{author}</div>
            <div className="book-issue-date">{issueDate}</div>
          </div>
          <p className="product-desc">{subtitle}</p>
          <div className="product-summary">
            <div className="product-title-repeat">{title}</div>
            <div className="product-price-repeat">
              {`${totalPrice.toLocaleString()}원`}
            </div>
            <QuantityBox count={count} setCount={setCount} />
          </div>
          {isSubscribe ? <SubscribeOptions /> : ''}
          <div className="price-info">
            <div className="text-sm test2">총 제품금액</div>
            <div className="text-2xl">{`${totalPrice.toLocaleString()}원`}</div>
          </div>

          <div>
            <ShippingInfo totalPriceInCart={totalPriceInCart} />
            <div className="cart-purchase-container">
              <Button color="white" onClick={handleCartClick}>
                장바구니
              </Button>
              {modalOpen && (
                <CartModal title={title} setModalOpen={setModalOpen} />
              )}
              <Button color="black" onClick={handlePaymentClick}>
                구매하기
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ProductInformation id={id} description={description} token={token} />
    </div>
  );
};

export default Contents;
