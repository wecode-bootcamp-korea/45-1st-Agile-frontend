import React, { useEffect, useState } from 'react';
import './Agreement.scss';

const Agreement = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkItems, setCheckItems] = useState([]);
  // const [check, setCheck] = useState(new Array(AGREE_INFO.length).fill(false));

  const handleCheckAll = () => {
    setCheckAll(!checkAll);
  };

  // const handleCheck = idx => {
  //   // console.log(idx);
  //   check[idx] = !check[idx];
  //   // setCheck(check);
  // };

  // useEffect(() => {
  //   setCheck(check);
  // }, [check]);

  return (
    <div className="agreement">
      <div className="agree-all">
        <input type="checkbox" checked={checkAll} onClick={handleCheckAll} />
        <div className="text-base">모든 약관 동의</div>
      </div>
      {AGREE_INFO.map(data => {
        return (
          <div key={data.id} className="agree">
            <input type="checkbox" checked={checkAll} />
            <div className="text-base">{data.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Agreement;

const AGREE_INFO = [
  { id: 1, text: '[필수]구매조건 확인 및 결제진행 동의' },
  { id: 2, text: '[필수]정기결제 서비스 이용 동의' },
];
