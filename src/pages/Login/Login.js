import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="loginform">
      <p className="start">
        <p className="login-password">로그인 및 회원가입</p>
        <p className="start-words">을 시작합니다.</p>
      </p>
      <div className="inputwrap">
        <input
          className="login"
          type="text"
          placeholder="이메일을 입력해주세요"
        />
        <input
          className="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
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
