import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavMain from '../../components/Nav/NavMain';
import TitleLine from '../../components/TitleLine/TitleLine';

const MainLayout = props => {
  const { children } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TitleLine />
      <NavMain />
      <div style={{ flex: '1', marginTop: '48px' }}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
