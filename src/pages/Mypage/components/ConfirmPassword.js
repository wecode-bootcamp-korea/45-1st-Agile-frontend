import React, { useState } from 'react';
import './ConfirmPassword.scss';
import { useNavigate } from 'react-router-dom';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNjM4NDA0fQ.9AnFo7VZuBaLGv9jSTIq3XFd5PBZOKQpUchEfWzAT80';

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
        Authorization: token,
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
