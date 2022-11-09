import React from 'react';
import Sidebar from "../containers/Sidebar";
import RepoCard from 'react-repo-card';

const Projects = () => {
    return (
        <div className="page-split">
          <Sidebar />
  
        <div className="right-side">
          <h1>PROJETS</h1>
        
          <div style={{ width: "705px" }}>
            <RepoCard username="francescaburgevin" repository="Portfolio" />
          </div>

          <div style={{ width: "705px" }}>
            <RepoCard username="francescaburgevin" repository="Montessori" />
          </div>

          <div style={{ width: "705px" }}>
            <RepoCard username="francescaburgevin" repository="RomaSpa" />
          </div>

        </div>
      </div>
    );
};

export default Projects;