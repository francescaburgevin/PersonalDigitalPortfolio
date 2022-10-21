import React from "react";
import Figure from "../components/Figure";
import Navigation from "../components/Navigation";

const About = () => {

    return (
    <div className="page-split">
      <div className="lite-bg-prime-color left-side">
        <Figure />
        <Navigation />
      </div>

      <div className="right-side">
        <div>
        <h1>A PROPOS</h1>
      </div>
      <div className='cv'>
            <img src="/images/cv_oct_22.jpg" alt='cv' />
        </div>
        </div>
    </div>
    );
};

export default About;