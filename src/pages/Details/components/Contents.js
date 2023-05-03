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
const Contents = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isSubscribed = true;
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

  const handleTabClick = index => () => setActiveIndex(index);

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
            <div>프리미엄 스킨케어 선물세트</div>
            <div className="product-actions">
              <WishlistButton />
              <ShareButton />
            </div>
          </div>
          <div className="book-meta text-sm">
            <div className="book-author">김종원 저</div>
            <div className="book-issue-date">날짜</div>
          </div>
          <p className="product-desc">
            발효 에센스/순금 앰플/영양 크림/오일 미스트 4종으로 구성된 탄력 광채
            스킨케어 패키지
          </p>
          <div className="product-summary">
            <div className="product-title-repeat">
              프리미엄 스킨케어 선물세트
            </div>
            <div className="product-price-repeat"> 36560원 </div>
            <QuantityBox />
          </div>
          {isSubscribed && <SubscribeOptions />}
          <div className="price-info">
            <div className="text-sm">총 제품금액</div>
            <div className="text-2xl">36,560원</div>
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
