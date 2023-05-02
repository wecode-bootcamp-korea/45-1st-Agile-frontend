import React, { useState } from 'react';
import Button from './Button';
import DescriptionArea from './DescriptionArea';
import ReviewList from './ReviewList';
import WishlistButton from './WishlistButton';
import ShareButton from './ShareButton';
import QuantityBox from './QuantityBox';
import ShippingInfo from './ShippingInfo';
import './Contents.scss';
const Contents = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = index => {
    setActiveIndex(index);
  };
  const tabArr = [
    {
      tabTitle: (
        <li className="tab" onClick={() => tabClickHandler(0)}>
          설명
        </li>
      ),
      tabCont: <DescriptionArea />,
    },
    {
      tabTitle: (
        <li className="tab" onClick={() => tabClickHandler(1)}>
          리뷰
        </li>
      ),
      tabCont: <ReviewList />,
    },
  ];

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
          <div className="price-info">
            <div className="text-sm">총 제품금액</div>
            <div className="text-2xl">36,560원</div>
          </div>
          <div>
            <ShippingInfo />
            <div className="cart-purchase-container">
              <Button color="white">장바구니</Button>
              <Button color="black" font="white">
                구매하기
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="information-area">
        <ul className="tabs">
          {tabArr.map((tab, index) => {
            return tab.tabTitle;
          })}
        </ul>
        <div className="tab-content">{tabArr[activeIndex].tabCont}</div>
      </div>
    </div>
  );
};

export default Contents;
