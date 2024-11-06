// src/components/Dashboard/Dashboard.js
import React from "react";
import "../dashboard.css";
import logo from "../images/icon.png";
import flight from "../images/flight.png";
import topup from "../images/Topup.png";
import hotel from "../images/hotel.png";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleTopUp = () => {
    navigate("/card");
  };
  return (
    <div className="dashboard">
      <div className="header-container">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="CathayCoin Logo" className="logo-image" />
          </div>
          <div className="profile-pic"></div>
        </div>

        <div className="balance-card">
          <div className="balance-info">
            <div className="label">Main balance</div>
            <div className="amount">
              14,500<span className="decimal">.01</span> CTC
            </div>
            <div className="percentage">+0.78%</div>
          </div>
          <div className="buttons">
            <button className="action-button" onClick={handleTopUp}>
              Manage
            </button>
            <button className="action-button">Top up</button>
            <button className="action-button">Rewards</button>
          </div>
        </div>
      </div>
      <div className="refer-rewards">
        <div className="refer-text">
          <div>Refer Rewards</div>
          <div>Earn 5$ rewards on every successfull refers</div>
        </div>
        <div className="refer-icon"></div>
      </div>

      <div className="market-stats">
        <h2>Market Statistics</h2>
        <div className="coin-stats">
          <div className="coin-info">
            <div className="coin-icon">CTC</div>
            <div>CathayCoin</div>
          </div>
          <div className="graph"></div>
          <div className="percentage-change">+0.00%</div>
        </div>
      </div>

      <div className="transactions">
        <div className="transactions-header">
          <h2>Latest Transactions</h2>
          <a href="#">View all</a>
        </div>
        <div className="transaction-list">
          <div className="transaction-item">
            <div className="transaction-icon">
              <img
                src={flight}
                alt="FLight Icon"
                className="transaction-icon-image"
              />
            </div>
            <div className="transaction-details">
              <div>Ticket to KIX → SZX</div>
              <div className="transaction-date">Today 12:32</div>
            </div>
            <div className="transaction-amount negative">-2265.65 CTC</div>
          </div>

          <div className="transaction-item">
            <div className="transaction-icon">
              <img src={topup} alt="Topup" className="transaction-icon-image" />
            </div>
            <div className="transaction-details">
              <div>Top up</div>
              <div className="transaction-date">Yesterday 02:12</div>
            </div>
            <div className="transaction-amount positive">+4300.00 CTC</div>
          </div>

          <div className="transaction-item">
            <div className="transaction-icon">
              <img src={hotel} alt="Hotel" className="transaction-icon-image" />
            </div>
            <div className="transaction-details">
              <div>Hotel Booking CTX2578</div>
              <div className="transaction-date">Oct 24 13:53</div>
            </div>
            <div className="transaction-amount negative">-740.00 CTC</div>
          </div>
        </div>
      </div>

      <nav className="bottom-nav">
        <button className="nav-item home"></button>
        <button className="nav-item search"></button>
        <button className="nav-item wallet active"></button>
        <button className="nav-item menu"></button>
        <button className="nav-item settings"></button>
      </nav>
    </div>
  );
}

export default Dashboard;
