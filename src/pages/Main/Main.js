import React from 'react';
import ProductLineup from './components/ProductLineup';
import NewestNav from './components/NewestNav';
import NavMain from '../../components/Nav/Nav-main';
import TitleLine from '../../components/TitleLine/TitleLine';
import TitleCategory from './components/TitleCategory';

import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <TitleLine />
      <NavMain />
      <video
        className="big-ad"
        src="/images/main/main-ad1.mp4"
        autoPlay
        muted
        loop
      />
      <TitleCategory />
      <video
        className="small-ad"
        src="/images/main/main-ad2.mp4"
        autoPlay
        muted
        loop
      />
      <div className="introd-sub">
        Esteem이 직접 검수한 따끈한 문제가 왔어요
      </div>
      <ProductLineup categoryId={1} subCategoryId={1} />
      <div className="introd-sub">너빼고 다 몰래보고 있어 돈버는 비법</div>
      <ProductLineup categoryId={2} subCategoryId={2} />
      <video
        className="small-ad"
        src="/images/main/main-ad3.mp4"
        autoPlay
        muted
        loop
      />
      <div className="introd-sub">
        미국이 놀라고 일본이 전전긍긍하는 화제의 그 신작들
      </div>
      <NewestNav />
    </div>
  );
};

export default Main;
