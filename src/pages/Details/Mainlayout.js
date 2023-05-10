import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavMain from '../../components/Nav/NavMain';

const MainLayout = props => {
  const { children } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <NavMain />
      <div style={{ flex: '1' }}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
