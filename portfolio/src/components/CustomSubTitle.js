import React from 'react';
import '../styles/_settings.scss';

const titleStyle = {
  marginBottom: "30px",
  fontFamily: 'barlow-bold',
  fontSize: "20px",
  backgroundColor: "transparent",
  color:"#002d2e"
};


const SubTitle = ({ label }) => (
  <h2
    className="custom-title"
    style={titleStyle}
  >
    {label}
  </h2>
);

export default SubTitle;