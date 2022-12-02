import React from 'react';
import '../styles/_settings.scss';

const style = {
  marginTop: "30px",
  padding: "7px 9px",
  fontFamily: 'barlow-bold',
  fontSize: "20px",
  backgroundColor: "#002d2e",
  color: "white"
};


const ProjectTechs = ({ label }) => (
  <p
    style={style}
  >
    {label}
  </p>
);

export default ProjectTechs;