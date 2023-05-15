import React from 'react';
import ItemTitle from './ItemTitle';
import './CustomerService.scss';

const CustomerService = () => {
  return (
    <div className="customer-service">
      <ItemTitle title="고객센터" />
      <div className="customer-service-main">
        <div className="text-xl main-number">0000-0000</div>
        <div>[평일] 오전 9시 ~ 오후 6시 </div>
        <div>[점심시간] 오후 12시 ~ 1시 </div>
      </div>
    </div>
  );
};

export default CustomerService;
