import React from "react";
import Sidebar from "../containers/Sidebar";
import CVfile from "../assets/files/CV_Francesca_Burgevin_DevWeb.pdf";
import Button from "../components/CustomButton";

const Home = () => {

  return (
    <div className="page-split">
      <Sidebar />
      <div className="left-hidden"></div>

      <div className="right-side">
        <h1>ACCUEIL</h1>

        <div className="home-text">
          <p>Une développeuse web full-stack avec 14 ans d'expériences en Marketing et une formation intensive acquise de Développeur intégrateur en réalisation d’applications web.</p>
          <p>Débrouillarde, aimant le goût du challenge, je vise un travail fait en autonomie, propre et complet.</p>

          <div className="button">
            <a href={CVfile} download title="CV en PDF">
              <Button label={"Télécharger mon CV"}></Button>
            </a>
          </div>

        </div>
      </div>

    </div >
  );
};

export default Home;