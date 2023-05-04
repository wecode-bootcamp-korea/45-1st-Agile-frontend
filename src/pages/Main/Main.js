import React from 'react';

import { Link } from 'react-router-dom';
import CATEGORY from './CATEGORY.js';
import ProductLineup from './ProductLineup.js';
import NewestNav from './NewestNav.js';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <TitleLine />
      <TitleNav />
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
      <ProductLineup subCategoryId={1} count={4} />
      <div className="introd-sub">너빼고 다 몰래보고 있어 돈버는 비법</div>
      <ProductLineup subCategoryId={2} count={4} />
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
const TitleLine = () => {
  return (
    <div className="title-line">
      <img className="logo" alt="logo" src="/images/main/logo.png" />
      <input className="search-bar" />
      <div className="title-right">
        <button className="to-wishlist" />
        <button className="to-cart" />
      </div>
    </div>
  );
};

const TitleNav = () => {
  return (
    <div className="title-nav">
      <button className="menus" />
      <div className="카테고리">카테고리</div>
    </div>
  );
};

const TitleCategory = () => {
  return (
    <div className="title-category">
      {CATEGORY.map(category => (
        <Link
          key={category.id}
          to={`/book?categoryId=${category.id}&subcategory=value`}
        >
          <img src={`/images/main/${category.img}`} alt={category.name} />
          <p>{category.name}</p>
        </Link>
      ))}
    </div>
  );
};
