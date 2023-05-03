import React from 'react';
import './MypageTop.scss';

const MypageTop = () => {
  return (
    <div className="mypage-top">
      <div className="top-left">
        <div className="text-xl">
          안녕하세요, <span className="bold">박현아</span>님
          <br /> 오늘도 현명한 하루 되세요!
        </div>
        <div>Esteem Up 회원</div>
      </div>
      <div className="top-right">
        <div>포인트</div>
      </div>
      <div className="top-bottom">
        <div>010-4034-6206</div>
        <div>정보수정</div>
      </div>
    </div>
  );
};

export default MypageTop;
