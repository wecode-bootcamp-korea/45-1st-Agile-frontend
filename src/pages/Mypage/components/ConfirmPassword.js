import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmPassword.scss';

const ConfirmPassword = () => {
  const navigate = useNavigate();
  const [pwd, setPwd] = useState();

  const handlePwd = e => {
    setPwd(e.target.value);
  };

  // 현재 비밀번호와 같은지 확인
  const confirmPwd = () => {
    fetch('http://10.58.52.241:3000/users/auth-check', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
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
          <b>비밀번호를 입력해주세요</b>
        </div>
        <input type="password" onChange={handlePwd} onKeyUp={handleEnter} />
        <button onClick={handleButton}>
          <b>확인</b>
        </button>
      </div>
    </div>
  );
};

export default ConfirmPassword;
