import React from "react";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Sidebar from "../containers/Sidebar";

const Home = () => {

  return (
    <div className="page-split">
      <Sidebar />

      <div className="right-side">
        <h1>ACCUEIL</h1>
        <Introduction />
        <Skills />
      </div>
    </div>
  );
};

export default Home;