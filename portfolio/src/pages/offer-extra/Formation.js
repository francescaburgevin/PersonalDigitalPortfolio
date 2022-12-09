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
    document.getElementById("btn").disabled = true;
    document.querySelector(".fade").classList.toggle("translucide");
  };

  function showEdu() {
    document.querySelector(".edu-mod").classList.toggle("show");
    document.querySelector(".fade").classList.toggle("translucide");
  };

  return (
    <div className="page-split">
      <Sidebar />
      <div className="left-hidden"></div>


      <div className="right-side bk-adapt justify-around">
        <h1>OFFER</h1>
        <div className="fade">
          <OffreServices />
          <Skills />
        </div>

        <div className="button-row">
          <div className="button">
            <a href={CVfile} download title="Télécharger le PDF">
              <Button label={"Télécharger mon CV"}></Button>
            </a>
          </div>

          <div className="intro-mod display hide" >
            <Introduction />
          </div>
          <button onClick={showIntro} title="Brève introduction perso">
            <Button label={"A propos de moi"}>
            </Button>
          </button>


          <div className="edu-mod display hide" >
            <Education />
          </div>
          <button id="btn-edu" onClick={showEdu} title="Une explication de la formation">
            <Button label={"La formation 3WA"}>
            </Button>
          </button>


        </div>
      </div>
    </div >
  );
};

export default Offer;