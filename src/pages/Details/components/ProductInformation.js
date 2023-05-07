import React, { useState } from 'react';
import DescriptionArea from './DescriptionArea';
import ReviewList from './ReviewList';
import './ProductInformation.scss';

const ProductInformation = id => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabClick = index => () => setActiveIndex(index);

  const tabArr = [
    {
      tabTitle: '설명',
      tabCont: <DescriptionArea />,
    },
    {
      tabTitle: '리뷰',
      tabCont: <ReviewList id={id} />,
    },
  ];

  return (
    <div className="product-information">
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
  );
};

export default ProductInformation;
