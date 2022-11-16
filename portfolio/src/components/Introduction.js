import React from 'react';
import beachSmile from '../assets/images/beachsmile.jpg';

const Introduction = () => {
    return (
        <div className='introduction'>
            <div className='text-field'>
                <p>Avec 25 ans d'expériences professionnelles, je cherche une première expérience en tant que programmeuse.</p> 
                <p>Depuis mars, je travaille avec HTML, CSS, JS, PHP, MySQL ainsi qu'Angular et Symfony.</p>
                <p>Mon travail idéal serait une équipe constituée de collègues qui valorisent la diversité des pensées et des talents, et qui partageant mon niveau d'exigence et d'ambition.</p>
            </div>
            <div className='photo'>
                <img src={beachSmile} alt='beachsmile' />
            </div>
        </div>
    );
};

export default Introduction;