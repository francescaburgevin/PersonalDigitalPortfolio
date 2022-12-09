import React from 'react';
import Avatar from './Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Figure = () => {
    return (
        <section className='figure'>
            <div className='title'>
                <Avatar />
                <h2>Francesca</h2>
                <h3>Développeuse Web Junior</h3>
                <h4>Français - English - Italiano</h4>
            </div>
            <div className="network-icons vertical-line align-end">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/francescanadel/?locale=fr_FR">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/francescaburgevin?tab=repositories">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>

        </section>
    );
};

export default Figure;