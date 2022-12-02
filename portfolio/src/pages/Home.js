import React from "react";
import Sidebar from "../containers/Sidebar";

const Home = () => {

  return (
    <div className="page-split">
      <Sidebar />

      <div className="right-side">
        <h1>ACCUEIL</h1>

      </div>
    </div>
  );
};

export default Home;