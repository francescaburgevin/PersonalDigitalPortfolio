import React from 'react';
import '../styles/_settings.scss';

const buttonStyle = {
  padding: "10px 20px",
  height: 'max-content',
  width: "max-content",
  background: "transparent",
  border:"2px solid #02989d",
  borderRadius:"8px",
  color:"#02989d",
  fontFamily: "barlow-bold",
  fontSize:"16px"
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