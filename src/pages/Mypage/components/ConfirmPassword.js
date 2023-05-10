import React, { useState } from 'react';
import './ConfirmPassword.scss';
import { useNavigate } from 'react-router-dom';

const ConfirmPassword = () => {
  const navigate = useNavigate();
  const [pwd, setPwd] = useState();
  const handlePwd = e => {
    setPwd(e.target.value);
  };

  const confirmPwd = () => {
    fetch('http://10.58.52.241:3000/users/auth-check', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNjQxMzAxfQ.Kyc_Slwm9TtI9ha_1AczftesroYJI1Cn17nwron5CCs',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ password: pwd }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'AUTH SUCCESS') {
          navigate('/userInfoUpdate');
        } else {
          alert('다시 입력해주세요.');
        }
      });
  };

  const handleEnter = e => {
    if (e.key === 'Enter') {
      confirmPwd();
    }
  };

  const handleButton = () => {
    confirmPwd();
  };

  return (
    <div className="confirm-password">
      <div className="confirm-main">
        <div className="text-2xl main-title">
          <b>비밀번호</b>
        </div>
        <input onChange={handlePwd} onKeyUp={handleEnter} />
        <button onClick={handleButton}>
          <b>확인</b>
        </button>
      </div>
    </div>
  );
};

export default ConfirmPassword;
