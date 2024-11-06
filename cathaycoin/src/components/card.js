// Card.js
import React from "react";
import "../Card.css";
import { useNavigate } from 'react-router-dom';

function Card() {
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate('/add-card');
  };
  return (
    <div>
      <div className="payment-header">
        <h2 className="payment-title">Payment Method</h2>
        <button className="add-card-button" onClick={handleAddCard}>Add card +</button>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <span>WeChat Pay</span>
            <span>ID: **** 2312</span>
          </div>
          <div className="card-body">
            <div className="bank-info">
              <div className="bank-account">Bank Account</div>
              <div className="account-number">**** **67 3245</div>
            </div>
            <div className="balance-info">
              <div className="balance-label">Balance</div>
              <div className="balance-amount">¥ 2,354</div>
            </div>
            <div className="wifi-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 15c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
                  fill="rgba(255,255,255,0.8)"
                />
                <path
                  d="M12 11c3.3 0 6 2.7 6 6h2c0-4.4-3.6-8-8-8s-8 3.6-8 8h2c0-3.3 2.7-6 6-6z"
                  fill="rgba(255,255,255,0.6)"
                />
                <path
                  d="M12 7c5.5 0 10 4.5 10 10h2c0-6.6-5.4-12-12-12S0 10.4 0 17h2c0-5.5 4.5-10 10-10z"
                  fill="rgba(255,255,255,0.4)"
                />
              </svg>
            </div>
            <div className="decorative-elements">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-3"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;