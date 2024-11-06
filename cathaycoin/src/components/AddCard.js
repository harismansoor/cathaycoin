// src/components/AddCard/AddCard.js
import React from 'react';
import '../AddCard.css';
import { useNavigate } from 'react-router-dom';
import alipayLogo from '../images/alipay.png';
import unionpayLogo from '../images/unionpay.png';
import wechatLogo from '../images/wechat.png';

function AddCard() {
  const navigate = useNavigate();

  return (
    <div className="add-card-page">
      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <span>←</span>
        </button>
        <h1>Add Card</h1>
      </div>

      <div className="section">
        <h2>Supported Integrations</h2>
        <div className="integration-list">
          <div className="integration-item">
            <div className="integration-info">
              <img src={alipayLogo} alt="Alipay" className="integration-logo" />
              <div className="integration-details">
                <div className="integration-name">Alipay</div>
                <div className="integration-method">Method: Account Number</div>
              </div>
            </div>
            <button className="integrate-button">Integrate Now</button>
          </div>

          <div className="integration-item">
            <div className="integration-info">
              <img src={unionpayLogo} alt="UnionPay" className="integration-logo" />
              <div className="integration-details">
                <div className="integration-name">UnionPay</div>
                <div className="integration-method">Method: Account Number</div>
              </div>
            </div>
            <button className="integrate-button">Integrate Now</button>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Current Integrations</h2>
        <div className="integration-list">
          <div className="integration-item">
            <div className="integration-info">
              <img src={wechatLogo} alt="WeChat Pay" className="integration-logo" />
              <div className="integration-details">
                <div className="integration-name">WeChat Pay</div>
                <div className="integration-method">ID: **** 2312</div>
              </div>
            </div>
            <button className="remove-button">Remove</button>
          </div>

          <div className="integration-item">
            <div className="integration-info">
              <img src={unionpayLogo} alt="UnionPay" className="integration-logo" />
              <div className="integration-details">
                <div className="integration-name">UnionPay</div>
                <div className="integration-method">Account Number **** **67 3245</div>
              </div>
            </div>
            <button className="remove-button">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCard;