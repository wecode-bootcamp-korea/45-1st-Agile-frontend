import React from 'react';
import { Link } from 'react-router-dom';
import CATEGORY from './CATEGORY';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <TitleLine />
      <TitleNav />
      <TitleAd />
      <TitleCategory />
      <TitleAd2 />
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

const TitleAd = () => {
  return (
    <div className="title-ad">
      <video autoPlay muted loop>
        <source src="/images/main/main-ad1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

const TitleCategory = () => {
  return (
    <div className="title-category">
      {CATEGORY.map(category => (
        <Link key={category.id} to={category.address}>
          <img src={`/images/main/${category.img}`} alt={category.name} />
          <p>{category.name}</p>
        </Link>
      ))}
    </div>
  );
};

const TitleAd2 = () => {
  return (
    <div className="title-ad2">
      <img className="ad2" src="/images/main/main-ad2.png" alt="ad2" />
    </div>
  );
};
