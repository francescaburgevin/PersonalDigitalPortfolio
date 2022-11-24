import React from 'react';
import '../styles/_settings.scss';

const titleStyle = {
  marginBottom: "15px",
  fontFamily: 'H2',
  fontSize: "40px",
  backgroundColor: "transparent",
  color: "#002d2e"
};


const Title = ({ label }) => (
  <h2
    className="custom-title"
    style={titleStyle}
  >
    {label}
  </h2>
);

export default Title;