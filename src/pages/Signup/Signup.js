import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const SignUp = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };
  return (
    <div className="first-title">
      <div className="title">
        <h1>회원가입</h1>
      </div>
      <div className="basicinfo">
        <div className="basic-info">기본정보</div>
      </div>
      <div className="signupform">
        <span className="password">이메일</span>
        <div className="writepwd">
          <input
            className="inputpwd"
            type="text"
            placeholder="이메일을 입력해주세요"
          />
          <span className="useemail">
            로그인 아이디로 사용할 이메일을 입력해 주세요.
          </span>
        </div>
        <span className="password">비밀번호</span>
        <div className="writepwd">
          <input
            className="inputpwd"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <span className="usepwd">
            (영문 대/소문자, 숫자, 특수기호 8~20개 사이를 입력해주세요)
          </span>
        </div>
        <div className="pwd-ok">
          <span className="checkpwd">비밀번호 확인</span>
          <input
            className="input-checkpwd"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
          />
        </div>
        <div className="writename">
          <span className="name">이름</span>
          <input
            className="inputname"
            type="text"
            placeholder="실명으로 기입해주세요"
          />
        </div>
        <div className="write-address">
          <span className="address">주소</span>
          <input className="input-address" type="text" placeholder="주소" />
        </div>
        <div className="write-phonenumber">
          <span className="phonenumber">전화번호</span>
          <input
            className="input-phonenumber"
            type="text"
            placeholder="000-0000-0000"
          />
        </div>
      </div>
      <div className="plusinfo">
        <div className="plus-info">추가정보</div>
      </div>
      <div className="plusinfoform">
        <div className="write-birth">
          <span className="birth">생년월일</span>
          <input className="input-birth" type="text" placeholder="YYYY-MM-DD" />
        </div>
        <div className="check-gender">
          <span className="gender">성별</span>
          <div className="check-radio">
            <input type="radio" name="gender" value="male" />
            남자
            <input type="radio" name="gender" value="female" />
            여자
            <input type="radio" name="gender" value="noselected" />
            선택 안함
          </div>
        </div>
      </div>
      <div className="agree">
        <div className="agree-ok">이용약관 동의</div>
      </div>
      <div className="agree-check">
        <input type="checkbox" id="agree-all" name="agree-all" />
        <label for="agree-all">전체 동의합니다 </label>
      </div>
      <span className="check-agree">
        선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수
        있습니다.
      </span>
      <div className="agree-essential">
        <input type="checkbox" id="agree-condition" name="agree-condition" />
        <label for="agree-condition">[필수] 이용약관 동의 </label>
      </div>
      <div className="agree-essential">
        <input type="checkbox" id="agree-condition" name="agree-condition" />
        <label for="agree-condition">[필수] 개인정보 수집 및 동의 </label>
      </div>
      <div className="agree-select">
        <input type="checkbox" id="agree-message" name="agree-message" />
        <label for="agree-message">
          [선택] SMS (문자, 카카오톡 등)으로 혜택과 유용한 정보를 보내드려도
          될까요?
        </label>
      </div>
      <div className="select-info">
        <input type="checkbox" id="agree-send" name="agree-send" />
        <label for="agree-send">
          [선택] 이메일로 혜택과 정보를 보내드려도 될까요?
        </label>
      </div>
      <div className="text">
        <span className="check-all">
          본인은 만 14세 이상이며,이용약관, 수집 및 이용을 확인하며, 동의합니다.
        </span>
      </div>
      <button className="signupbtn" type="button" onClick={goToMain}>
        가입하기
      </button>
    </div>
  );
};

export default SignUp;
