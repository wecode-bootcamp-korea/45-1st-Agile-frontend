import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // 토큰이 있으면 true, 없으면 false
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const handleLoginClick = () => {
    if (isLoggedIn) {
      handleLogout();
    }
  };

  return (
    <header className="header">
      <Link to={isLoggedIn ? '/mypage' : '/signup'}>
        <button className="to-signup">
          {isLoggedIn ? '마이페이지' : '회원가입'}
        </button>
      </Link>

      <Link to={isLoggedIn ? '/' : '/login'}>
        <button className="to-login" onClick={handleLoginClick}>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </button>
      </Link>

      <Link to="/customer-center">
        <button className="to-customer-center">고객센터</button>
      </Link>
    </header>
  );
}

export default Header;
