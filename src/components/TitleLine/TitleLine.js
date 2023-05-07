import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CategoryModal from '../CategoryModal/CategoryModal';

import './TitleLine.scss';

const TitleLine = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleMenusMouseEnter = () => {
    setShowCategoryModal(true);
  };

  const handleMenusMouseLeave = () => {
    setShowCategoryModal(false);
  };

  return (
    <div className="title-line">
      <div className="title-one">
        <Link to="/">
          <img className="logo" alt="logo" src="/images/main/logo.png" />
        </Link>
        <input className="search-bar" />
        <div className="title-right">
          <button className="to-wishlist" />
          <Link to="/cart">
            <button className="to-cart" />
          </Link>
        </div>
      </div>
      <div className="title-nav">
        <div
          className="title-nav-things"
          onMouseEnter={handleMenusMouseEnter}
          onMouseLeave={handleMenusMouseLeave}
        >
          <button className="menus" />

          <div className="category-name">카테고리</div>
          {showCategoryModal && <CategoryModal />}
        </div>
      </div>
    </div>
  );
};

export default TitleLine;
