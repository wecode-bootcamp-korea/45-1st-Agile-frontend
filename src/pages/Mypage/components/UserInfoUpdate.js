import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemTitle from './ItemTitle';
import './UserInfoUpdate.scss';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNjM4NDA0fQ.9AnFo7VZuBaLGv9jSTIq3XFd5PBZOKQpUchEfWzAT80';

const UserInfoUpdate = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch('http://10.58.52.241:3000/users', {
      method: 'GET',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const user = data.user;
        setUserInfo({
          email: user.email,
          password: '',
          passwordOk: '',
          name: user.name,
          address: user.address,
          phoneNumber: user.phoneNumber,
          birthDate: user.birthDate,
        });
      });
  }, []);

  // const isValidBtn = false;

  const isValidBtn =
    userInfo.password &&
    userInfo.passwordOk &&
    userInfo.password === userInfo.passwordOk &&
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
      userInfo.password
    );

  const btnMode = isValidBtn ? 'valid' : 'notValid';
  const handleInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handlePwd = () => {
    if (!isValidBtn) {
      alert('비밀번호를 조건에 맞춰 입력해주세요');
      return;
    }
    if (userInfo.password) {
      fetch('http://10.58.52.241:3000/users/password', {
        method: 'PATCH',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ password: userInfo.password }),
      });
      alert('비밀번호수정이 완료되었습니다.');
      navigate('/mypage');
    }
  };

  const handleUser = () => {
    if (userInfo.address && userInfo.phoneNumber) {
      fetch('http://10.58.52.241:3000/users/information', {
        method: 'PATCH',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          phoneNumber: userInfo.phoneNumber,
          address: userInfo.address,
        }),
      });
      alert('회원정보수정이 완료되었습니다.');

      navigate('/mypage');
    }
  };

  return (
    <div className="userinfo-update">
      <ItemTitle title="기본정보" />
      <div className="userinfo-update-main">
        {UPDATE_INFO.map(data => {
          return (
            <div className="user-info" key={data.id}>
              <div className="text-lg info-title">{data.title}</div>
              <div className="input-part">
                <input
                  name={data.type}
                  type={data.inputType}
                  className={`valid-${data.isUpdate}`}
                  value={userInfo[data.type]}
                  onChange={handleInfo}
                  readOnly={!data.isUpdate}
                  placeholder={data.placeholder}
                />
                {data.id === 2 && (
                  <div className="help-pwd">
                    (영문 대/소문자, 숫자, 특수기호 8~20개 사이를 입력해주세요)
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="button-part">
          <button
            className={`text-lg updatePwd ${btnMode}`}
            onClick={handlePwd}
          >
            <b>비밀번호수정</b>
          </button>
          <button className="text-lg updateInfo" onClick={handleUser}>
            <b>회원정보수정</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoUpdate;

const UPDATE_INFO = [
  { id: 1, title: '이메일', type: 'email', isUpdate: 0 },
  {
    id: 2,
    title: '비밀번호',
    type: 'password',
    isUpdate: 1,
    placeholder: '현재 비밀번호를 입력해주세요',
    // inputType: 'password',
  },
  {
    id: 3,
    title: '비밀번호 확인',
    type: 'passwordOk',
    isUpdate: 1,
    placeholder: '비밀번호를 한번 더 입력해주세요',
    // inputType: 'password',
  },
  { id: 4, title: '이름', type: 'name', isUpdate: 0 },
  { id: 5, title: '주소', type: 'address', isUpdate: 1, placeholder: '주소' },
  {
    id: 6,
    title: '휴대폰 번호',
    type: 'phoneNumber',
    isUpdate: 1,
    placeholder: '000-0000-0000',
  },
  { id: 7, title: '생년월일', type: 'birthDate', isUpdate: 0 },
];
