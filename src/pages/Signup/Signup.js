import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const SignUp = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };
  return (
    <>
      <div className="title">
        <h1>회원가입</h1>
      </div>
      <div className="basicinfo">
        <h2>기본정보</h2>
      </div>
      <div className="signupform">
        <h4>이메일</h4>
        <input
          className="inputemail"
          type="text"
          placeholder="이메일을 입력해주세요"
        />
        <h6>로그인 아이디로 사용할 이메일을 입력해 주세요</h6>
        <h4>비밀번호</h4>
        <input
          className="inputpwd"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <h6>(영문 대/소문자, 숫자, 특수기호 8~20개 사이를 입력해주세요)</h6>
        <h4>비밀번호 확인</h4>
        <input
          className="checkpwd"
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
        />
        <h4>이름</h4>
        <input
          className="inputname"
          type="text"
          placeholder="실명으로 기입해주세요"
        />
        <h4>주소</h4>
        <input className="address" type="text" placeholder="주소" />
        <h4>휴대전화</h4>
        <input className="phonenumber" type="text" placeholder="000-000-0000" />
      </div>
      <div className="plusinfo">
        <h2>추가정보</h2>
        <h4>생년월일</h4>
        <input className="birth" type="text" placeholder="YYYY-MM-DD" />
        <h4>성별</h4>
        <input type="radio" name="gender" value="male" />
        남자
        <input type="radio" name="gender" value="female" />
        여자
        <input type="radio" name="gender" value="noselected" />
        선택 안함
      </div>
      <div className="agree">
        <h4>이용약관동의</h4>
        <input type="checkbox" id="agree-all" name="agree-all" />
        <label for="agree-all">전체 동의합니다 </label>
        <h6>
          선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할
          수 있습니다.
        </h6>
        <input type="checkbox" id="agree-condition" name="agree-condition" />
        <label for="agree-condition">[필수] 이용약관 동의 </label>
        <input type="checkbox" id="agree-message" name="agree-message" />
        <label for="agree-message">
          [선택] SMS (문자, 카카오톡 등)으로 혜택과 유용한 정보를 보내드려도
          될까요?
        </label>
        <input type="checkbox" id="agree-send" name="agree-send" />
        <label for="agree-send">
          [선택] 이메일로 혜택과 정보를 보내드려도 될까요?
        </label>
      </div>
      <div className="text">
        <h6>
          본인은 만 14세 이상이며 <span className="condition">이용약관,</span>
          <span className="info">개인정보 수집 및 이용</span>을 확인하였으며,
          동의합니다.
        </h6>
      </div>
      <button className="signupbtn" type="button" onClick={goToLogin}>
        가입하기
      </button>
    </>
  );
};

export default SignUp;
