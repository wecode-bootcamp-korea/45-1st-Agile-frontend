import React, { useState } from 'react';
import Button from './Button';
import DescriptionArea from './DescriptionArea';
import ReviewList from './ReviewList';
import WishlistButton from './WishlistButton';
import ShareButton from './ShareButton';
import QuantityBox from './QuantityBox';
import ShippingInfo from './ShippingInfo';
import SubscribeOptions from './SubscribeOptions';
import './Contents.scss';

const tabArr = [
  {
    tabTitle: '설명',
    tabCont: <DescriptionArea />,
  },
  {
    tabTitle: '리뷰',
    tabCont: <ReviewList />,
  },
];

const Contents = props => {
  const { productDetail } = props;
  const {
    title,
    subtitle,
    price,
    issue_date,
    is_subscribe,
    image,
    description,
    author,
  } = productDetail.book;

  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(1);

  const handleTabClick = index => () => setActiveIndex(index);
  const totalPrice = price * count;

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
              <WishlistButton />
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
            <ShippingInfo />
            <div className="cart-purchase-container">
              <Button color="white">장바구니</Button>
              <Button color="black">구매하기</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="information-area">
        <ul className="tabs">
          {tabArr.map((tab, index) => {
            return (
              <li className="tab" onClick={handleTabClick(index)} key={index}>
                {tab.tabTitle}
              </li>
            );
          })}
        </ul>
        <div className="tab-content">{tabArr[activeIndex].tabCont}</div>
      </div>
    </div>
  );
};

export default Contents;
