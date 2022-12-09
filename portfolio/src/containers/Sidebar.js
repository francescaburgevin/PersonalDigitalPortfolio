import React from 'react';
import Figure from "../components/Figure";
import Navigation from "../components/Navigation";
import Contact from '../components/Contact';

const Sidebar = () => {
    return (
        <nav className="lite-bg-prime-color left-side">
            <Figure />
            <Navigation />
            <Contact />
        </nav>
    );
};

export default Sidebar;