import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavMain from '../../components/Nav/NavMain';
import Header from '../../components/Header/Header';

const MainLayout = props => {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // 토큰이 있으면 true, 없으면 false
  }, [location.pathname, setIsLoggedIn]);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    } else {
      navigate('/login');
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleButtonClick={handleButtonClick}
      />
      <NavMain />
      <div style={{ flex: '1' }}>{children}</div>
      <Footer
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default MainLayout;
