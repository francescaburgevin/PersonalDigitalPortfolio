import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>

                    <NavLink to="/about">
                        <li>A propos</li>
                    </NavLink>

                    <NavLink to="/projects">
                        <li>Projets</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;