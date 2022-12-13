import React from 'react';
import Title from './CustomTitle';

const Education = () => {
    return (
        <section className='edu-section'>
            <div className='education'>
                <div className='text-field'>
                    <Title label={"Développeur Web Full Stack"}></Title>
                    <h3>Titre officiel : Développeur intégrateur en réalisation d’applications web</h3>
                    <h3>Délivré le 4 octobre 2022 par <a target="_blank" rel="noopener noreferrer" href="https://3wa.fr/formation-conventionnee-pole-emploi/">3WA</a></h3>
                    <p>Cette formation intensive permet de préparer le titre RNCP 34393 de niveau 5.</p>
                    <p>Un cursus intense de 5 mois + un stage de 1 mois.</p>
                    <p>Maîtriser les 5 langages de programmation les plus demandés sur le marché du travail (HTML, CSS, JavaScript, MySQL et PHP).</p>
                    <p>Réalisation de sites et d’applications web Micro-Framework et MVC avec fonctionnalités CRUD en HTML, CSS, JS, PHP et MySQL.</p>
                    <p>Travail en équipe via GitHub.</p>
                    <p>Modalités d’évaluation : les apprenants doivent rendre différents livrables, dans le cadre de la réalisation du projet de fin d’année permettant la validation et délivrance du titre RNCP.</p>
                    <p>Mention Très Bien 🤓</p>
                </div>
            </div>
        </section>
    );
};

export default Education;