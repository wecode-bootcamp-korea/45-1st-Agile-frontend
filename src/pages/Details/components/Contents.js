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

const Contents = ({ productDetail, setProductsInCart, productsInCart, id }) => {
  const {
    title,
    subtitle,
    price,
    issue_date,
    is_subscribe,
    image,
    description,
    author,
    sub_category_id,
    is_liked,
  } = productDetail;

  const [count, setCount] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(is_liked);
  const navigate = useNavigate();

  const productsInfo = [
    {
      item: productDetail,
      quauntity: 1,
    },
  ];

  const totalPrice = price * count;

  const openCartModal = () => {
    setModalOpen(true);
  };
  const totalPriceInCart = productsInCart.reduce((total, element) => {
    return total + element.price * element.amount;
  }, 0);

  const addToCart = () => {
    // fetch('/data/cartdata.json', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json;charset=utf-8', token: '' },
    //   body: JSON.stringify({ id: '1', quantity: 1 }),
    // });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(1);
        resolve();
      }, 2000);
    });
  };

  const fetchCartData = async () => {
    try {
      const res = await fetch('/data/cartdata.json');
      const data = await res.json();
      setProductsInCart(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCartClick = async () => {
    try {
      openCartModal();
      await addToCart();
      await fetchCartData();
    } catch (e) {
      console.log(e);
    }
  };
  const BOOKS_ID = id;
  const SUBCATEGORY_ID = sub_category_id;

  const handlePaymentClick = () => {
    navigate(`/payment?product_id=${BOOKS_ID}&subcategory=${SUBCATEGORY_ID}`, {
      state: { productsInfo },
    });
  };

  return (
    <div className="contents">
      <div className="contents-area">
        <div className="thumbnail">
          <img className="product-img" alt="" src="/images/details/null.png" />
        </div>
        <div className="product-info">
          <div className="product-title">
            <div>{title}</div>
            <div className="product-actions">
              <WishlistButton
                id={id}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
              />
              <ShareButton />
            </div>
          </div>
          <div className="book-meta text-sm">
            <div className="book-author">{author}</div>
            <div className="book-issue-date">{issue_date}</div>
          </div>
          <p className="product-desc">{subtitle}</p>
          <div className="product-summary">
            <div className="product-title-repeat">{title}</div>
            <div className="product-price-repeat">
              {`${totalPrice.toLocaleString()}원`}
            </div>
            <QuantityBox count={count} setCount={setCount} />
          </div>
          {is_subscribe ? <SubscribeOptions /> : ''}
          <div className="price-info">
            <div className="text-sm">총 제품금액</div>
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
      <ProductInformation id={id} />
    </div>
  );
};

export default Contents;
