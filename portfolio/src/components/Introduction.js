import React from 'react';

//import beachSmile from '../assets/images/beachsmile.jpg';

import Title from '../components/CustomTitle';
import SubTitle from '../components/CustomSubTitle';

import Button from "../components/CustomButton";
import CVfile from "../assets/files/cv_burgevin_nov_22.pdf";

const Introduction = () => {
    return (
        <section>
            <div className='introduction'>
                <div className='text-field'>

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
                </div>


            </div>

        </section>
    );
};

export default Introduction;

                //<div className='photo '>
                //    <img src={beachSmile} alt='beachsmile' />
                //</div>
