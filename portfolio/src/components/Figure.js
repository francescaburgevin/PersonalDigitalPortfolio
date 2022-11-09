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
            <div className="vertical-line align-end">
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
            </div>
        </section>
    );
};

export default Figure;