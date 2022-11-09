import React from 'react';
import Figure from "../components/Figure";
import Navigation from "../components/Navigation";
import Contact from '../components/Contact';

const Sidebar = () => {
    return (
        <div className="lite-bg-prime-color left-side">
            <Figure />
            <Navigation />
            <Contact />
        </div>
    );
};

export default Sidebar;