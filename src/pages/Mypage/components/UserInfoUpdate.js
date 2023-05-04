import React from 'react';
import './UserInfoUpdate.scss';

const UserInfoUpdate = ({ info }) => {
  return (
    <div className="userinfo-update">
      <div className="text-xl">기본정보</div>
      <div className="userinfo-update-main">
        {USER_INFO.map(data => {
          return (
            <div className="user-info" key={data.id}>
              <div className="text-lg">{data.title}</div>
              <input
                className={`valid-${data.isUpdate}`}
                value={info[data.type]}
              />
            </div>
          );
        })}
        <div className="button-part">
          <button className="text-lg">
            <b>회원정보수정</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoUpdate;

const USER_INFO = [
  { id: 1, title: '이메일', type: 'email', isUpdate: 0 },
  { id: 2, title: '비밀번호', type: 'password', isUpdate: 1 },
  { id: 3, title: '비밀번호 확인', type: 'password_re', isUpdate: 1 },
  { id: 4, title: '이름', type: 'name', isUpdate: 0 },
  { id: 5, title: '주소', type: 'address', isUpdate: 1 },
  { id: 6, title: '휴대폰 번호', type: 'phone_number', isUpdate: 1 },
  { id: 7, title: '생년월일', type: 'birth_date', isUpdate: 0 },
];
