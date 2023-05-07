import React, { useEffect, useRef } from 'react';
import './CartModal.scss';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';

const CartModal = props => {
  const { setModalOpen, title } = props;
  const navigate = useNavigate();
  const handleModalClosed = () => {
    setModalOpen(false);
  };
  const modalRef = useRef(null);

  return (
    <div className="cart-modal-background">
      <div className="cart-modal" ref={modalRef}>
        <div className="modal-contents text-base">
          장바구니에 제품을 담았습니다
        </div>
        <div className="product-name text-sm">{title}</div>
        <div className="buttons">
          <Button
            className="first-button"
            color="white"
            onClick={handleModalClosed}
          >
            계속 쇼핑하기
          </Button>
          <Button
            onClick={() => navigate('/cart')}
            className="second-button"
            color="black"
          >
            장바구니로 이동
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
