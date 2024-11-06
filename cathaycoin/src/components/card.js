// Card.js
import React from "react";
import "../Card.css";

function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <span>WeChat Pay</span>
        <span>ID: **** 2312</span>
      </div>
      <div className="card-body">
        <div className="bank-account">Bank Account</div>
        <div className="account-number">**** **67 3245</div>
        <div className="balance">Balance ¥ 2,354</div>
      </div>
    </div>
  );
}

export default Card;
