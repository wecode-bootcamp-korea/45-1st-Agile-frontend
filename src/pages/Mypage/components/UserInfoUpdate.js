import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserInfoUpdate.scss';

const UserInfoUpdate = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    email: 'abc@gmail.com',
    password: '',
    password_re: '',
    name: '박현아',
    address: '',
    phone_number: '',
    birth_date: '0000-00-00',
  });

  const handleInfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleButton = () => {
    navigate('/mypage');
  };

  return (
    <div className="userinfo-update">
      <div className="text-xl">기본정보</div>
      <div className="userinfo-update-main">
        {UPDATE_INFO.map(data => {
          return (
            <div className="user-info" key={data.id}>
              <div className="text-lg">{data.title}</div>
              <input
                name={data.type}
                className={`valid-${data.isUpdate}`}
                value={info[data.type]}
                onChange={handleInfo}
                readOnly={!data.isUpdate}
              />
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
  { id: 2, title: '비밀번호', type: 'password', isUpdate: 1 },
  { id: 3, title: '비밀번호 확인', type: 'password_re', isUpdate: 1 },
  { id: 4, title: '이름', type: 'name', isUpdate: 0 },
  { id: 5, title: '주소', type: 'address', isUpdate: 1 },
  { id: 6, title: '휴대폰 번호', type: 'phone_number', isUpdate: 1 },
  { id: 7, title: '생년월일', type: 'birth_date', isUpdate: 0 },
];
