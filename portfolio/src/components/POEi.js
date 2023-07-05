import React from 'react';
import Title from './CustomTitle';

const POEi = () => {
    return (
        <section className='poei-section'>
            <div className='poei'>
                <div className='text-field'>
                    <Title label={"Ingénieur de production DevOps"}></Title>
                    <h3>POEi CGI par Aélion</h3>
                    <h3>Validé le 23 mai 2023 par <a target="_blank" rel="noopener noreferrer" href="https://www.aelion.fr/">Aélion</a></h3>
                    <p>Acquérir les compétences, savoir-faire, et savoir-être métiers nécessaires à la mise en production applicative (MEP).</p>
                    <p>Maitriser les systèmes Linux-Unix et Microsoft (administration, configuration, scripting).</p>
                    <p>Maitriser le langage SQL et la virtualisation.</p>
                    <p>Connaitre les outils utilisés dans monde DevOps (Conteneurs, orchestrateurs) et situer ces outils et leurs usages.</p>
                    <p>Appréhender les outils de production informatique (ordonnancement, supervision, stockage, sauvegarde).</p>
                    <p>Automatiser le déploiement des infrastructures et les tâches d’exploitation récurrentes.</p>
                    <p>Monitorer les services déployés et maintenir en condition opérationnelle les environnements en responsabilité.</p>
                    <p>Assurer le support niveau 2/3 des incidents Système et Réseaux.</p>
                    <p>Modalités d’évaluation : soutenance d'un projet final.</p>
                </div>
            </div>
        </section>
    );
};

export default POEi;