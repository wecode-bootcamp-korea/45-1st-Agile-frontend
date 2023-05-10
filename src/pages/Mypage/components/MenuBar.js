import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuBar.scss';

const MenuBar = ({ menuMode, setMenuMode }) => {
  const navigate = useNavigate();

  const handleMenu = id => {
    setMenuMode(id);

    //log out
    if (id === 4) {
      localStorage.setItem('token', '');
      navigate('/');
    }
  };

  return (
    <div className="menu-bar">
      {MENU_INFO.map(data => {
        return (
          <div
            key={data.id}
            className={`text-lg ${data.id === menuMode ? 'selected' : ''}`}
            onClick={() => handleMenu(data.id)}
          >
            {data.title}
          </div>
        );
      })}
    </div>
  );
};

export default MenuBar;

const MENU_INFO = [
  { id: 1, title: '주문배송 조회' },
  { id: 2, title: '정기구독 관리' },
  { id: 3, title: '관심 상품' },
  { id: 4, title: '로그아웃' },
];
