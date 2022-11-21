import React from 'react';
import Sidebar from "../containers/Sidebar";

import Title from "../components/CustomTitle";
import SubTitle from "../components/CustomSubTitle";
import GitHubFetch from "../services/GitHubFetch";

const Projects = () => {
  return (
    <div className="page-split">
      <Sidebar />

      <div className="right-side">
        <h1>PROJETS</h1>

        <Title label={"Portfolio"}></Title>
        <SubTitle label={"Voir mes travaux ci-dessous. Sauf indication contraire explicite, toutes leurs parties back-end et front-end ont été entièrement réalisées par moi."}></SubTitle>
        <SubTitle label={"Actuellement disponible pour des projets nouveaux et existants."}></SubTitle>

        <GitHubFetch />


      </div>

    </div>

  );
};

export default Projects;