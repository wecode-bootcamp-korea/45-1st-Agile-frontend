import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CategoryModalNav from '../CategoryModal/CategoryModalNav';
import './NavMain.scss';
const NavMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 150 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop <= 150 && isScrolled) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // 토큰이 있으면 true, 없으면 false
  }, [location.pathname, setIsLoggedIn]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showSubCategoryModal, setShowSubCategoryModal] = useState(false);
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
  return (
    <nav className="nav-main">
      <div className={isScrolled ? 'nav-contaner-scrolled' : 'nav-contaner'}>
        <div className="nav-main-thing">
          <div
            className="nav-main-left"
            onMouseEnter={handleMenusMouseEnter}
            onMouseLeave={handleMenusMouseLeave}
          >
            <button className="menus" />
            <div className="category-name">카테고리</div>
            {showCategoryModal && (
              <CategoryModalNav
                showSubCategoryModal={showSubCategoryModal}
                setShowSubCategoryModal={setShowSubCategoryModal}
              />
            )}
          </div>
          <div className="nav-main-right">
            <input className="search-bar" type="text" />
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
      </div>
    </nav>
  );
};
export default NavMain;
