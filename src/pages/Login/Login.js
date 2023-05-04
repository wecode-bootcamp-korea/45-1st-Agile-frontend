import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const isinputValid = userId.match(/^[a-z0-9]+@[a-z]+(.[a-z]{2,3}){1,2}$/);

  const saveUserId = event => {
    setUserId(event.target.value);
  };

  const saveUserPassword = event => {
    setUserPassword(event.target.value);
  };

  const goToMain = () => {
    if (!isinputValid) {
      window.alert('이메일을 다시 입력해주세요!');
      return false;
    } else if (!userPassword) {
      window.alert('비밀번호를 입력해주세요!');
      return false;
    } else {
      navigate('/');
    }
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="loginform">
      <p className="start">
        <strong>로그인 및 회원가입</strong>을<p>시작합니다.</p>
      </p>
      <div className="inputwrap">
        <input
          className="login"
          type="text"
          placeholder="이메일을 입력해주세요"
          onChange={saveUserId}
          value={userId}
        />
        <input
          className="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={saveUserPassword}
          value={userPassword}
        />
        <div className="id-check">
          <input type="checkbox" id="id-check" name="id-check" />
          <label for="id-check">아이디 저장 </label>
        </div>
      </div>
      <button className="loginbtn" type="button" onClick={goToMain}>
        로그인
      </button>
      <button className="signupbtn" type="button" onClick={goToSignup}>
        회원가입
      </button>
      <div className="forget">
        <div className="findemail">
          <Link to="/forgetemail">이메일 찾기</Link>
        </div>
        <div className="findpassword">
          <Link to="/forgetpassword">비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
