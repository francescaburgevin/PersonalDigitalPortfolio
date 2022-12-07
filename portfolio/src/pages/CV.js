import React from "react";
import Sidebar from "../containers/Sidebar";
import { assos } from "../personal";
import CVimage from "../assets/files/cv_burgevin_nov_22.png";
import CVfile from "../assets/files/cv_burgevin_nov_22.pdf";
import CVdownload from "../assets/icons/download.png";

const CV = () => {

  return (
    <div className="page-split">
      <Sidebar />
      <div className="left-hidden"></div>

      <div className="right-side">
        <h1>CV Francesca Burgevin Nadel</h1>

        <div className="cv-section">

          <div className='cv'>
            <img src={CVimage} alt='cv' />
          </div>

          <div className="cv-options">
            <a href={CVfile} download><img src={CVdownload} alt='cv' /></a>
          </div>

          <div className="links">
            {assos.data.map((asso, index) => {
              return (
                <div>
                  <a href={asso.link} title={asso.title} target="_blank" rel="noopener noreferrer">
                    <div className="assos-list" key={index}>
                      <h3>{asso.name}</h3>
                      <img src={asso.logo} alt={asso.name} />
                    </div>
                  </a>
                </div>
              )
            })};

          </div>

        </div>


      </div>
    </div>
  );
};

export default CV;