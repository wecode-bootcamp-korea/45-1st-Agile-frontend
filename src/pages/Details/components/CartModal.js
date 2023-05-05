import React, { useEffect, useRef } from 'react';
import './CartModal.scss';

const CartModal = props => {
  const { setModalOpen } = props;
  const handleModalClosed = () => {
    setModalOpen(false);
  };
  const modalRef = useRef(null);

  useEffect(() => {
    const handler = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [setModalOpen]);

  return (
    <div className="cart-modal-background">
      <div className="cart-modal" ref={modalRef}>
        <button className="modal-close-button" onClick={handleModalClosed}>
          X
        </button>
        <div>모달창</div>
      </div>
    </div>
  );
};

export default CartModal;
