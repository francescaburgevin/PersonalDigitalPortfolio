import React from "react";
import Sidebar from "../containers/Sidebar";
import { assos } from "../personal";
import CVimage from "../assets/files/CV_Francesca_Burgevin_DevWeb.png";
import CVfile from "../assets/files/CV_Francesca_Burgevin_DevWeb.pdf";
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
            <img src={CVimage} alt='cv francesca burgevin' />
          </div>

          <div className="cv-download">
            <a href={CVfile} download><img src={CVdownload} alt='cv' /></a>
          </div>

          <div className="links">
            <h3>LIENS</h3>
            {assos.data.map((asso, index) => {
              return (
                <div>
                  <a href={asso.link} title={asso.title} target="_blank" rel="noopener noreferrer">
                    <div className="assos-list" key={index}>
                      <h3>{asso.name}</h3>
                    </div>
                  </a>
                </div>
              )
            })}

          </div>

        </div>


      </div>
    </div>
  );
};

export default CV;