import React from 'react';
import Avatar from './Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Figure = () => {
    return (
        <section>
            <div>
                <Avatar />
                <h2>Francesca Burgevin</h2>
                <h3>Développeuse Web Full Stack Junior</h3>
                <h3>Français - English - Italiano</h3>
            </div>
            <div className="network-icons vertical-line align-end">
                <a href="https://www.linkedin.com/in/francescanadel/?locale=fr_FR">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/francescaburgevin?tab=repositories">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>

        </section>
    );
};

export default Figure;