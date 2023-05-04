import React, { children } from 'react';
import NavSub from '../../components/Nav/Nav-sub';
import Footer from '../../components/Footer/Footer';

const MainLayout = props => {
  const { children } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <NavSub />
      <div style={{ flex: '1' }}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
