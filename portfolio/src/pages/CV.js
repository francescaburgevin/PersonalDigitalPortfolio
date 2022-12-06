import React from "react";
import Sidebar from "../containers/Sidebar";
import { assos } from "../personal";
import CVimage from "../assets/files/cv_burgevin_nov_22.png";
import CVfile from "../assets/files/cv_burgevin_nov_22.pdf";
import CVdownload from "../assets/icons/download.png";
import SubTitle from "../components/CustomSubTitle";

const CV = () => {

  return (
    <div className="page-split">
      <Sidebar />

      <div className="right-side">

        <div>
          <h1>CV Francesca Burgevin Nadel</h1>
        </div>

        <div className="cv-section">
          <div className='cv'>
            <img src={CVimage} alt='cv' />
          </div>
          <div className="cv-options">
            <a href={CVfile} download><img src={CVdownload} alt='cv' /></a>
          </div>
        </div>

        <div className="row align-center">

          {assos.data.map((assos, index) => {
            return (
              <a href={assos.link}>
                <div className="assos-list" key={index}>
                  <img src={assos.logo} alt={assos.name} />
                  <SubTitle style={{ color: "red" }}>{assos.name}</SubTitle>
                </div>
              </a>
            )
          })};

        </div>

      </div>
    </div>
  );
};

export default CV;