import React from "react";
import Sidebar from "../containers/Sidebar";

const About = () => {

    return (
    <div className="page-split">
        <Sidebar />

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