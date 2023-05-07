import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryModalNav from '../CategoryModal/CategoryModalNav';
import './NavMain.scss';

const NavMain = () => {
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
    setShowCategoryModal(false);
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
            {showCategoryModal && <CategoryModalNav />}
          </div>
          <div className="nav-main-right">
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

export default NavMain;
