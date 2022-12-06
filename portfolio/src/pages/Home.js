import React from "react";
import Sidebar from "../containers/Sidebar";
import CVfile from "../assets/files/cv_burgevin_nov_22.pdf";
import Button from "../components/CustomButton";

const Home = () => {

  return (
    <div className="page-split">
      <Sidebar />

      <div className="right-side">
        <h1>ACCUEIL</h1>

        <div className="home-text">
          <p>Une développeuse web full-stack avec 14 ans d'expériences en Marketing et une formation intensive acquise.</p>
          <p>Lors de ma formation, j'ai développé le front et le back de projets variés à partir de zéro et en native.</p>
          <p>J'ai des très bonnes bases dans plusieurs langages et frameworks, ainsi que les bibliothèques et les technologies qui leur sont liés.</p>
          <p>Débrouillarde, aimant le goût du challenge, je vise un travail fait en autonomie, propre et complet.</p>

          <div className="button">
            <a href={CVfile} download title="CV en PDF">
              <Button label={"Télécharger mon CV"}></Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;