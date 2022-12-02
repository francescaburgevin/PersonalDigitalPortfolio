import React from 'react';
import '../styles/_settings.scss';

const projectTitleStyle = {
  marginBottom: "15px",
  fontFamily: 'H2',
  fontSize: "30px",
  backgroundColor: "transparent",
  color: "#02989d"
};


const ProjectTitle = ({ label }) => (
  <h2
    style={projectTitleStyle}
  >
    {label}
  </h2>
);

export default ProjectTitle;