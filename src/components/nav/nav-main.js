import React, { useState, useEffect } from 'react';
import './nav-main.scss';

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

  return (
    <div className="nav-main">
      <div className={isScrolled ? 'nav-contaner-scrolled' : 'nav-contaner'}>
        <div className="nav-main-thing">
          <div className="nav-main-left">
            <img
              alt="책"
              className="viewmore"
              src="../images/components/nav/books.png"
            />
            <div className="category">카테고리</div>
          </div>
          <div className="nav-main-right">
            <input className="search-bar" type="text" />
            <img
              className="heart"
              alt="heart"
              src="../images/components/nav/heart.png"
            />
            <img
              alt="쇼핑백"
              className="shopingbag"
              src="../images/components/nav/shopingbag.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMain;
