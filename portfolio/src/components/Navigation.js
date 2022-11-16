import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <section>
            <div className="navigation">
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>

                    <NavLink to="/about">
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