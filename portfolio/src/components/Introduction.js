import React from 'react';
import Title from '../components/CustomTitle';


const Introduction = () => {



    return (
        <section className='intro-section'>
            <div className='introduction'>
                <div className='text-field'>

                    <Title label={"A propos de moi"}></Title>

                    <p>J'ai profité de 8 ans dans la production télévisée entre New York City et Paris, et 14 ans dans le Marketing en France. </p>
                    <p>J’ai toujours été attirée par la gestion de projet, l’analyse des besoins et la recherche de solutions techniques,
                        ainsi que le besoin de m’instruire sur les informations techniques de nouveaux produits ou m’informer sur les nouvelles technologies de production.
                    </p>

                    <p>Une conjoncture d'ambition et d'apprentissage, je me suis lancée dans l'ère numérique suite à une formation intensive de Développeur Web.</p>
                    <p>J’ai appris les langages principaux du développement web, mais c’est la découverte d’une facilité naturelle de comprendre et d’apprendre qui
                        a été pour moi une vraie révélation!
                    </p>

                </div>


            </div>

        </section>
    );
};

export default Introduction;