import React from 'react';
import Title from './CustomTitle';

const OffreServices = () => {
    return (
        <section className='offer-services'>
            <div className="text-field">
                <Title label={"Offre"}></Title>

                <p>Lors de ma formation, j'ai développé le front et le back de projets variés à partir de zéro et en native.</p>
                <p>J'ai des très bonnes bases dans plusieurs langages et frameworks, ainsi que les bibliothèques et les technologies qui leur sont liés.</p>

                <ul>
                    <h3>Je peux vous aider sur tous les aspects de votre projet :</h3>
                    <li>Vérifier la bonne conception UI/UX</li>
                    <li>Co-développer le front-end et le back-end</li>
                    <li>Structuration et suivi du projet</li>
                    <li>Découper, assembler et programmer les pages d’un site web ou d’une application</li>
                    <li>Intégrer les contenus et les effets graphiques</li>
                    <li>Conformer le projet aux normes d’accès et de référencement</li>
                    <li>Stocker et récupérer les informations utilisateurs dans une base de données</li>

                </ul>
            </div>
        </section>
    );
};

export default OffreServices;