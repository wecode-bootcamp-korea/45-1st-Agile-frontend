import React, { useRef } from 'react';
import './CartRecheckModal.scss';
import Button from './Button';

const CartRecheckModal = props => {
  const { setRecheckModalOpen, handleProductsInCarts } = props;
  const handleModalClosed = () => {
    setRecheckModalOpen(false);
  };
  const modalRef = useRef(null);

  return (
    <div className="cart-modal-background">
      <div className="cart-modal" ref={modalRef}>
        <div className="modal-contents text-sm">
          장바구니에 동일한 상품이 있습니다.
          <br /> 장바구니에 추가하시겠습니까?
        </div>
        <div className="product-name text-sm" />
        <div className="buttons">
          <Button
            className="first-button"
            color="white"
            onClick={handleModalClosed}
          >
            취소
          </Button>
          <Button
            onClick={handleProductsInCarts}
            className="second-button"
            color="black"
          >
            장바구니에 담기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartRecheckModal;
