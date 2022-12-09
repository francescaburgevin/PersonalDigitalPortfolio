import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <section className='navigation'>
            <div className="nav-list">
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>

                    <NavLink to="/offer">
                        <li>Offre</li>
                    </NavLink>

                    <NavLink to="/cv">
                        <li>CV</li>
                    </NavLink>

                    <NavLink to="/projects">
                        <li>Projets</li>
                    </NavLink>
                </ul>
            </div>
        </section>
    );
};

export default Navigation;