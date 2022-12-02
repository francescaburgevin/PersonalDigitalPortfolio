import React from "react";
import Skills from "../components/Skills";
import Sidebar from "../containers/Sidebar";
import Title from "../components/CustomTitle";
import Button from '../components/CustomButton';
import CVfile from "../assets/files/cv_burgevin_nov_22.pdf";


const Offer = () => {

  return (
    <div className="page-split">
      <Sidebar />

      <div className="right-side bk-adapt">
        <h1>OFFER</h1>

        <Title label={"Offre"}></Title>

        <p>Une développeuse web full-stack avec 14 ans d'expérience en Marketing et une formation intensive acquise.</p>
        <p>Lors de ma formation, j'ai développé le front et le back de quelques projets à partir de zéro.</p>
        <p>J'ai des très bonnes bases dans plusieurs langages et frameworks, ainsi que les bibliothèques et les technologies qui leur sont liés.</p>
        <ul>
          <h3>Je peux vous aider sur tous les aspects de votre projet :</h3>
          <li>- vérifier la bonne conception UI/UX</li>
          <li>- co-développer le back-end et le front-end</li>
          <li>- structuration et suivi du projet</li>
        </ul>





        <Title label={"A propos de moi"}></Title>

        <p>J'ai jouit de 8 ans dans la production télévisée entre New York City et Paris, et 14 ans dans le Marketing. </p>
        <p>A travers mes expériences, j'ai pu développer et appliquer des compétences techniques et des qualités professionnelles
          telles que la réalisation d'un projet, le travail avec une équipe diversifiée, la recherche de solutions à des problèmes
          difficiles et la gestion du stress.
        </p>

        <p>Une conjoncture d'ambition et d'apprentissage, je me suis lancée dans l'ère numérique.</p>
        <p>Grâce au code, je découvre un nouveau talent dans un secteur en évolution constante, porté par la connectivité mondiale.</p>

        <div className="button">
          <a href={CVfile} download>
            <Button label={"Télécharger mon CV"}></Button>
          </a>
        </div>

        <Skills />
      </div>

    </div>
  );
};

export default Offer;