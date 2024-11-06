// Header.js
import React from "react";
import "../Header.css";
import PropTypes from "prop-types";

function Header({ title, actionText, onActionClick }) {
  return (
    <div className="header">
      <h1 className="header-title">{title}</h1>
      {actionText && (
        <button className="header-action" onClick={onActionClick}>
          {actionText}
        </button>
      )}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  actionText: PropTypes.string,
  onActionClick: PropTypes.func,
};

export default Header;
