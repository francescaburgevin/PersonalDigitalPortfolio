import React from 'react';

const buttonStyle = {
  margin: '10px 0',
  height: '100px',
  width: "100px",
  background: "blue"
};

const Button = ({ label, handleClick }) => (
  <button
    className="btn btn-default"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button>
);

export default Button;