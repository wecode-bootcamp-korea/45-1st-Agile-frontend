import React, { useState, useEffect } from 'react';
import './nav-sub.scss';

const NavSub = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 123 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <div className="nav-sub">
      <div className={isScrolled ? 'nav-contaner-scrolled' : 'nav-contaner'}>
        <div className="nav-sub-thing">
          <div className="nav-sub-left">
            <img
              alt="책"
              className="viewmore"
              src="../images/components/nav/books.png"
            />
            <div className="category">카테고리</div>
          </div>
          <div className="nav-sub-right">
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

export default NavSub;
