import React from 'react';
import '../styles/_settings.scss';

const style = {
  margin: "18px 1px",
  fontFamily: 'barlow-regular',
  fontSize: "15px",
  color: "#002d2e"
};


const ProjectLink = ({ label }) => (

  <p
    style={style}
  >
    🔗 {label}
  </p>
);

export default ProjectLink;