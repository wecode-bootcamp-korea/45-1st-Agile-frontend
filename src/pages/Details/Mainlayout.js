import React, { children } from 'react';
import NavSub from '../../components/Nav/Nav-sub';
import Footer from '../../components/Footer/Footer';

const MainLayout = props => {
  const { children } = props;
  return (
    <>
      <NavSub />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
