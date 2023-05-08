import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryModalNav from '../CategoryModal/CategoryModalNav';
import './NavSub.scss';

const NavSub = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleMenusMouseEnter = () => {
    setShowCategoryModal(true);
  };

  const handleMenusMouseLeave = () => {
    setTimeout(() => {
      if (showCategoryModal) {
        setShowCategoryModal(false);
      }
    }, 300);
  };

  return (
    <nav className="nav-sub">
      <div className={isScrolled ? 'nav-contaner-scrolled' : 'nav-contaner'}>
        <div className="nav-sub-thing">
          <div
            className="nav-sub-left"
            onMouseEnter={handleMenusMouseEnter}
            onMouseLeave={handleMenusMouseLeave}
          >
            <button className="menus" />
            <div className="category-name">카테고리</div>
            {showCategoryModal && <CategoryModalNav />}
          </div>
          <div className="nav-sub-right">
            <input className="search-bar" type="text" />
            <button className="to-wishlist" />
            <Link to="/cart">
              <button className="to-cart" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSub;
