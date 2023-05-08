import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';

const List = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);
  return (
    //map 사용, 마이페이지에 있는 제품리스트 컴포넌트를 map으로 사용할 예정
    <div className="list">
      {productList.length >= 1
        ? productList.map(item => <ListItem it={item} />)
        : '장바구니에 담긴 제품이 없습니다.'}
    </div>
  );
};

export default List;
