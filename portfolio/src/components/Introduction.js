import React from 'react';
import beachSmile from '../assets/images/beachsmile.jpg';
import Button from "../components/CustomButton";

const Introduction = () => {
    return (
        <section>
            <div className='introduction'>
                <div className='text-field'>
                    <h2>A PROPOS DE MOI</h2>
                    
                    <h3>25 ans d'expériences professionnelles</h3>
                    <p>De la production télévisiée au responsable marketing opérationnel, le développement et l'usage des compétences techniques et des qualités professionnelles. </p> 
                    <p>L'aboutissement d'un projet, le travail d'équipe, la recherche de solutions, et la gestion de stresse. </p> 
                    
                    <h3>De renouveau</h3>
                    <p>Une conjoncture d'ambition et d'apprentissage, je me lance dans l'ère digitale.</p>
                    <p>Grâce au code, je découvre un nouveau talent dans un secteur en évolution constante, portée par la connectivité mondiale.</p>

                    <h3>& Vous ?</h3>
                    <p>Vous pouvez compter sur mon investissement dans votre projet.</p>



                </div>
                <div className='photo'>
                    <img src={beachSmile} alt='beachsmile' />
                </div>

            </div>
            <Button>Normal</Button>
        </section>
    );
};

export default Introduction;