import React, { useState } from 'react';

const ConfirmPassword = () => {
  const [pwd, setPwd] = useState();
  const handlePwd = e => {
    setPwd(e.target.value);
  };

  const handleButton = () => {
    fetch('http://10.58.52.241:3000/users/auth-check', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNjQxMzAxfQ.Kyc_Slwm9TtI9ha_1AczftesroYJI1Cn17nwron5CCs',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ password: pwd }),
    });
  };

  return (
    <div className="confirm-password">
      <input onChange={handlePwd} />
      <button onClick={handleButton}>확인</button>
    </div>
  );
};

export default ConfirmPassword;
