import React from "react";
import Skills from "../components/Skills";
import Sidebar from "../containers/Sidebar";
import Introduction from "../components/Introduction";
import OffreServices from "../components/OffreServices";
import Education from "../components/Education";
import Button from "../components/CustomButton";
import CVfile from "../assets/files/cv_burgevin_nov_22.pdf";

const Offer = () => {

  function showIntro() {
    document.querySelector(".intro-mod").classList.toggle("show");
  };

  function showEdu() {
    document.querySelector(".edu-mod").classList.toggle("show");
  };

  return (
    <div className="page-split">
      <Sidebar />

      <div className="right-side bk-adapt">
        <h1>OFFER</h1>
        <OffreServices />
        <Skills />

        <div className="button-row">
          <div className="button">
            <a href={CVfile} download title="Télécharger le PDF">
              <Button label={"Télécharger mon CV"}></Button>
            </a>
          </div>

          <button onClick={showIntro} title="Brève introduction perso">
            <Button label={"A propos de moi"}>
            </Button>
          </button>

          <div className="intro-mod display hide" >
            <Introduction />
          </div>

          <button onClick={showEdu} title="Une explication de la formation">
            <Button label={"La formation 3WA"}>
            </Button>
          </button>

          <div className="edu-mod display hide" >
            <Education />
          </div>

        </div>
      </div>
    </div >
  );
};

export default Offer;