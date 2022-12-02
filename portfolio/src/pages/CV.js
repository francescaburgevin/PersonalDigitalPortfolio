import React from "react";
import Sidebar from "../containers/Sidebar";

import CVimage from "../assets/files/cv_burgevin_nov_22.png";
import CVfile from "../assets/files/cv_burgevin_nov_22.pdf";
import CVdownload from "../assets/icons/download.png";

const CV = () => {

  return (
    <div className="page-split">
      <Sidebar />

      <div className="right-side">

        <div>
          <h1>A PROPOS</h1>
        </div>

        <div className="cv-section">
          <div className='cv'>
            <img src={CVimage} alt='cv' />
          </div>
          <div className="cv-options">
            <a href={CVfile} download><img src={CVdownload} alt='cv' /></a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CV;