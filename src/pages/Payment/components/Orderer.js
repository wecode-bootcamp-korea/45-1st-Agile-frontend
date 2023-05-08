import React from 'react';
import './Orderer.scss';

const Orderer = ({ info, handleInfo }) => {
  return (
    <div className="orderer">
      <div className="text-xl">주문자 정보</div>
      <div className="orderer-main">
        {USER_INFO.map(data => {
          return (
            <div className="orderer-info" key={data.id}>
              <div className="text-lg">{data.title}</div>
              <input
                name={data.type}
                value={info[data.type]}
                onChange={handleInfo}
                readOnly
              />
            </div>
          );
        })}

        <div className="text-base">
          배송이 시작되면 주문 처리 과정을 이메일과 휴대폰 번호로 알려드리니,
          <br />꼭 정확한 정보를 입력해 주세요.
        </div>
      </div>
    </div>
  );
};

export default Orderer;

const USER_INFO = [
  { id: 1, title: '주문자 이름', type: 'name' },
  { id: 2, title: '휴대폰 번호', type: 'phoneNumber' },
  { id: 3, title: '이메일', type: 'email' },
];
