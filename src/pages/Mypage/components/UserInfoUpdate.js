import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemTitle from './ItemTitle';
import './UserInfoUpdate.scss';

const UserInfoUpdate = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch('http://10.58.52.241:3000/users', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNjM4NDA0fQ.9AnFo7VZuBaLGv9jSTIq3XFd5PBZOKQpUchEfWzAT80',
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
          password_re: '',
          name: user.name,
          address: user.address,
          phoneNumber: user.phoneNumber,
          birthDate: user.birthDate,
        });
      });
  }, []);
  const handleInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleButton = () => {
    if (userInfo.password) {
      console.log('pwd');
      fetch('http://10.58.52.241:3000/users/password', {
        method: 'PATCH',
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNjM4NDA0fQ.9AnFo7VZuBaLGv9jSTIq3XFd5PBZOKQpUchEfWzAT80',
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ password: userInfo.password }),
      });
    } else {
      console.log('no pwd');
      fetch('http://10.58.52.241:3000/users/information', {
        method: 'PATCH',
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNjM4NDA0fQ.9AnFo7VZuBaLGv9jSTIq3XFd5PBZOKQpUchEfWzAT80',
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          phoneNumber: userInfo.phoneNumber,
          address: userInfo.address,
        }),
      });
      console.log(userInfo.phoneNumber);
      console.log(userInfo.address);
    }
    navigate('/mypage');
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
                  className={`valid-${data.isUpdate}`}
                  value={userInfo[data.type]}
                  onChange={handleInfo}
                  readOnly={!data.isUpdate}
                  placeholder={data.placeholder}
                />
                {data.id === 3 && (
                  <div className="help-pwd">
                    (영문 대/소문자, 숫자, 특수기호 8~20개 사이를 입력해주세요)
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="button-part">
          <button className="text-lg" onClick={handleButton}>
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
  },
  {
    id: 3,
    title: '비밀번호 확인',
    type: 'password_re',
    isUpdate: 1,
    placeholder: '비밀번호를 한번 더 입력해주세요',
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
