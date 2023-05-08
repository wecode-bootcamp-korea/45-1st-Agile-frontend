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
    fetch('http://10.58.52.230:3000/orders/user', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgzNTI4MjY2fQ.cHOI-3sL1BPWSu2OZ3Sp1nMbYvClKitzJWtGgYBal4s',
        'Content-type': 'application/json;utf=8',
      },
    })
      .then(res => res.json())
      .then(data => {
        const user = data.user;
        console.log(data.user);
        setUserInfo(user);
        setInfo({
          name: user.name,
          phoneNumber: user.phoneNumber,
          email: user.email,
          address: user.address,
          receiverName: user.name,
          receiverPhoneNumber: user.phoneNumber,
          receiverAddress: user.address,
          subscribeStart: subDate(),
        });
        setPoint({ curPoint: parseInt(user.points) });
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
            usePoint: parseInt(totalPrice + fee),
            earnPoint: 0,
            remainPoint: 0,
            price: parseInt(totalPrice),
            shipmentFee: parseInt(fee),
          };
        });
        if (totalPrice >= 70000) {
          setPoint(prev => {
            return {
              ...prev,
              earnPoint: parseInt(prev.usePoint * 0.02),
            };
          });
        }

        setPoint(prev => {
          return {
            ...prev,
            remainPoint: parseInt(
              prev.curPoint - prev.usePoint + prev.earnPoint
            ),
          };
        });
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

      <OrderList orderInfo={orderInfo} />
      <Orderer info={info} handleInfo={handleInfo} />
      <Shipment
        info={info}
        handleInfo={handleInfo}
        setRadio={setRadio}
        radio={radio}
        switchRadio={switchRadio}
      />
      {orderInfo[0]?.isSubscribe && (
        <Subscribe info={info} handleInfo={handleInfo} />
      )}
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
