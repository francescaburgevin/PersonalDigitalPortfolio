import React from 'react';
import Title from './CustomTitle';

const OffreServices = () => {
    return (
        <section className='offer-services'>
            <div className="text-field">
                <Title label={"Offre"}></Title>

                <p>Je suis formée sur le développement front et back de projets variés à partir de zéro et en native.</p>
                <p>J'ai des très bonnes bases dans plusieurs langages et frameworks, ainsi que les bibliothèques et les technologies qui leur sont liés.</p>
                <p>Capable d'automatiser l'installation et la configuration d'applications sur un réseau virtuel, je suis capable de les lancer via des conteneurs.</p>

                <ul>
                    <h3>Je peux vous aider sur tous les aspects de votre projet :</h3>
                    <li>Pilotage de projet</li>
                    <li>Co-développer le front-end et le back-end</li>
                    <li>Organiser un micro-framework et MVC avec des fonctionnalités CRUD</li>
                    <li>Développer des pages de tunnel d’achat et des formulaires d’inscription en plusieurs étapes</li>
                    <li>Réaliser une authentification login et tester les systèmes de sécurité</li>
                    <li>Stocker et récupérer les informations utilisateurs dans une base de données</li>
                    <li>Créer un réseau virtuel et faire du monitoring</li>
                    <li>Mettre en place une plateforme CI/CD</li>
                    <li>Manipuler containers et images Docker et Kubernetes</li>
                </ul>
            </div>
        </section>
    );
};

export default OffreServices;