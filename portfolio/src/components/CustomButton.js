import React from 'react';
import '../styles/_settings.scss';

const buttonStyle = {
  padding: "10px 20px",
  height: 'max-content',
  width: "max-content",
  //background: "black",
  background: "#02989d",
  borderRadius: "8px",
  //color: "#02989d",
  color: "white",
  fontFamily: "barlow-regular",
  fontSize: "17px",
  cursor: "pointer",
  boxShadow: "none",
  border: "none",
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