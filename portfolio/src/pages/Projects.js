import React from 'react';
import Sidebar from "../containers/Sidebar";
import Title from "../components/CustomTitle";
import SubTitle from "../components/CustomSubTitle";
import GitHubFetch from "../components/GitHubFetch";

const Projects = () => {
  return (
    <div className="page-split white">
      <Sidebar />

      <div className="right-side">

        <div className="project-title">
          <h1>PROJETS</h1>
          <Title label={"Portfolio"}></Title>
          <SubTitle label={"I can code! Voici mes projets sur GitHub. Sauf indication contraire explicite, toutes leurs parties back-end et front-end ont été entièrement réalisées par moi."}></SubTitle>
          <SubTitle label={"Actuellement disponible pour des projets nouveaux et existants."}></SubTitle>
        </div>

        <GitHubFetch />
      </div>

    </div>

  );
};

export default Projects;