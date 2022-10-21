import React from "react";
import Figure from "../components/Figure";
import Navigation from "../components/Navigation";

const Home = () => {

  return (
    <div className="page-split">
      <div className="lite-bg-prime-color left-side">
        <Figure />
        <Navigation />
      </div>

      <div className="right-side">
        <h1>ACCUEIL</h1>
      </div>
    </div>
  );
};

export default Home;