import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPassword: '',
  });

  const isinputValid = userInfo.userId.match(
    `/^[a-z0-9]+@[a-z]+(.[a-z]{2,3}){1,2}$/`
  );

  const handleInput = event => {
    const { name, Info } = event.target;
    setUserInfo({ ...userInfo, [name]: Info });
  };

  const goToMain = () => {
    if (!isinputValid) {
      alert('이메일을 다시 입력해주세요!');
      return false;
    } else if (!userInfo.userPassword) {
      alert('비밀번호를 입력해주세요!');
      return false;
    } else {
      fetch('http://10.58.52.146:3000/users/logIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          email: userInfo.userId,
          password: userInfo.userPassword,
        }),
      })
        .then(response => {
          return response.json();
        })
        .then(result => {
          if (result.accessToken) {
            localStorage.setItem('token', result.accessToken);
            navigate('/');
          }
        });
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
          onChange={handleInput}
        />
        <input
          className="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleInput}
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
