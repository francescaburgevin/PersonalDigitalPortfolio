import React from 'react';
import '../styles/_settings.scss';

const style = {
  marginBottom: "30px",
  fontFamily: 'barlow-bold',
  fontSize: "20px",
  backgroundColor: "transparent",
  color: "#002d2e"
};


const ProjectBaseline = ({ label }) => (
  <h2
    style={style}
  >
    {label}
  </h2>
);

export default ProjectBaseline;