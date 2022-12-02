import React from 'react';
import '../styles/_settings.scss';

const style = {
  marginTop: "10px",
  paddingLeft: "30px",
  fontFamily: 'barlow-regular',
  fontSize: "15px",
  backgroundColor: "transparent",
  color: "#02989d"
};


const ProjectTechs = ({ label }) => (
  <li
    style={style}
  >
    ∙ {label}
  </li>
);

export default ProjectTechs;