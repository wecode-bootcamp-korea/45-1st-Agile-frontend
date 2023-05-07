import React, { useState, useEffect } from 'react';
import OrderList from './components/OrderList';
import Orderer from './components/Orderer';
import Shipment from './components/Shipment';
import Subscribe from './components/Subscribe';
import PaymentMethod from './components/PaymentMethod';
import PaymentInfo from './components/PaymentInfo';

import './Payment.scss';

const Payment = () => {
  const [userInfo, setUserInfo] = useState({});
  const [orderInfo, setOrderInfo] = useState({});
  const [radio, setRadio] = useState(true);
  const [info, setInfo] = useState({});
  const [point, setPoint] = useState({});

  const handleInfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  useEffect(() => {
    fetch('/data/userData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
        setInfo({
          name: data.name,
          phone_number: data.phone_number,
          email: data.email,
          address: data.address,
          receiver_name: data.name,
          receiver_phone_number: data.phone_number,
          receiver_address: data.address,
          subscribe_start: subDate(),
        });
        setPoint({ curPoint: data.points });
      });
  }, []);

  useEffect(() => {
    fetch('/data/orderItemsData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setOrderInfo(data);
        let totalPrice = 0;
        data.forEach(ele => {
          totalPrice += ele.price * ele.quantity;
        });

        const fee = totalPrice < 40000 ? 3000 : 0;

        setPoint(prev => {
          return {
            ...prev,
            usePoint: totalPrice + fee,
            earnPoint: 0,
            remainPoint: 0,
            price: totalPrice,
            shipmentFee: fee,
          };
        });

        setPoint(prev => {
          return {
            ...prev,
            remainPoint: prev.curPoint - prev.usePoint,
          };
        });

        if (point.usePoint >= 70000) {
          setPoint(prev => {
            return {
              ...prev,
              earnPoint: prev.usePoint * 0.02,
            };
          });
        }

        // if (point.remainPoint < 0) {
        //   alert('잔액이 부족합니다.');
        // }
      });
  }, []);

  // useEffect(() => {
  //   fetch('', {
  //     method: 'POST',
  //     headers: {
  //       accessToken: 'token',
  //       'Content-type': 'application/json;utf=8',
  //     },
  //     body: JSON.stringify(),
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     });
  // }, []);

  const switchRadio = () => {
    for (let key in info) {
      if (key.includes('receiver')) {
        if (radio) {
          info[key] = '';
        } else {
          info[key] = userInfo[key.slice(9)];
        }
      }
    }
  };

  return (
    <div className="payment">
      <div className="order-sheet">
        <p className="text-2xl">주문서</p>
      </div>

      <OrderList />
      <Orderer info={info} handleInfo={handleInfo} />
      <Shipment
        info={info}
        handleInfo={handleInfo}
        setRadio={setRadio}
        radio={radio}
        switchRadio={switchRadio}
      />
      <Subscribe info={info} handleInfo={handleInfo} />
      <div className="pay-part">
        <PaymentMethod point={point} />
        <PaymentInfo point={point} />
      </div>
    </div>
  );
};
export default Payment;

const subDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDay() + 1; //next day

  if (month < 10) {
    month = '0' + String(month);
  }
  if (day < 10) {
    day = '0' + String(day);
  }

  const date = year + '-' + month + '-' + day;
  return date;
};
