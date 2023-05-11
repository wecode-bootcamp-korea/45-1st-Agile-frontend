import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import CategoryModal from '../CategoryModal/CategoryModal';
import './TitleLine.scss';
const TitleLine = () => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showSubCategoryModal, setShowSubCategoryModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const handleMenusMouseEnter = () => {
    setShowCategoryModal(true);
  };
  const handleMenusMouseLeave = () => {
    setTimeout(() => {
      if (showCategoryModal) {
        setShowCategoryModal(false);
      }
    }, 500);
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // 토큰이 있으면 true, 없으면 false
  }, [location.pathname, setIsLoggedIn]);
  return (
    <div className="title-line">
      <div className="title-one">
        <Link to="/">
          <img className="logo" alt="logo" src="/images/main/logo.png" />
        </Link>
        <input className="search-bar" />
        <div className="title-right">
          <Link to="/mypage">
            <button className="to-wishlist" />
          </Link>
          {isLoggedIn ? (
            <Link to="/cart">
              <button className="to-cart" />
            </Link>
          ) : (
            <Link to="/login">
              <button className="to-cart" />
            </Link>
          )}
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
          {showCategoryModal && (
            <CategoryModal
              showSubCategoryModal={showSubCategoryModal}
              setShowSubCategoryModal={setShowSubCategoryModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default TitleLine;
