import React from "react";
import Skills from "../components/Skills";
import Sidebar from "../containers/Sidebar";
import Introduction from "../components/Introduction";
import OffreServices from "../components/OffreServices";
import Education from "../components/Education";
import Button from "../components/CustomButton";
import CVfile from "../assets/files/CV_Francesca_Burgevin_DevWeb.pdf";
import CloseX from "../components/CloseX";
import POEi from "../components/POEi";

const Offer = () => {

  function showIntro() {
    document.querySelector(".intro-mod").classList.toggle("show");
    document.querySelector(".fade").classList.toggle("translucide");
    document.querySelector(".intro-mod").scrollIntoView({ block: "start" });
  };

  function showEdu() {
    document.querySelector(".edu-mod").classList.toggle("show");
    document.querySelector(".fade").classList.toggle("translucide");
    document.querySelector(".edu-mod").scrollIntoView({ block: "start" });
  };

  function showPOEi() {
    document.querySelector(".poei-mod").classList.toggle("show");
    document.querySelector(".fade").classList.toggle("translucide");
    document.querySelector(".poei-mod").scrollIntoView({ block: "start" });
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

          <button id="default-propos-btn" onClick={showIntro} title="Brève introduction perso">
            <Button label={"A propos de moi"}>
            </Button>
          </button>
          <div className="intro-mod display hide" >
            <CloseX />
            <Introduction />
          </div>

          <button id="btn-edu" onClick={showEdu} title="Une explication de la formation">
            <Button label={"La formation 3WA"}>
            </Button>
          </button>
          <div className="edu-mod display hide" >
            <CloseX />
            <Education />
          </div>

          <button id="btn-poei" onClick={showPOEi} title="Une explication de la formation">
            <Button label={"La POEi Aélion"}>
            </Button>
          </button>
          <div className="poei-mod display hide" >
            <CloseX />
            <POEi />
          </div>

        </div>
      </div>
    </div >
  );
};

export default Offer;