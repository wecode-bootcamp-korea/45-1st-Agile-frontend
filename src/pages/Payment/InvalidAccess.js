import React from 'react';
import { useNavigate } from 'react-router-dom';
import WarningIcon from '../../assets/payment/warning.jpg';
import './InvalidAccess.scss';

const InvalidAccess = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className="invalid-access">
      <div className="invalid-box">
        <img alt="waring" src={WarningIcon} width="200" />
        <div className="error-msg">잘못된 접근입니다.</div>
        <button className="text-2xl" onClick={handleClick}>
          <b>메인페이지</b>
        </button>
      </div>
    </div>
  );
};

export default InvalidAccess;
