import React from 'react';

const Blank = () => {
  return (
    <div className="cart">
      <div className="top">
        <div className="text-2xl cart-title">장바구니</div>
      </div>
      <div className="content-wrap">
        <div className="left-side">
          <div className="check-box-controller">
            <input type="checkbox" checked={false} onChange={() => {}} />
            <div className="text-left">
              <span className="select-all">전체선택</span>
              <span className="division">|</span>
              <span className="select-delete">선택삭제</span>
            </div>
          </div>
          <div className="normal-delivery">일반배송</div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: 'auto',
              paddingTop: '120px',
            }}
          >
            장바구니에 담긴 상품이 없습니다.
          </div>
        </div>
        <div className="right-side">
          <div className="order-info">
            <div className="sub-total">
              합계 <div className="won">+0원</div>
            </div>
            <div className="discount">
              할인금액 <div className="won">-0원</div>
            </div>
            <div className="deliver-fee">
              {' '}
              배송비
              <div className="won">0원</div>
            </div>
            <div className="total">
              결제예정금액
              <div className="won">0원</div>
            </div>
          </div>

          <div className="buying-button">
            <button className="empty-button web">제품을 담아주세요</button>
          </div>

          <span className="tips">
            쿠폰과 적립금은 결제 페이지에서 적용할 수 있어요
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blank;
