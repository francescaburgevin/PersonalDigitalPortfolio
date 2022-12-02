import React from "react";
import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Sidebar from "../containers/Sidebar";

const Offer = () => {

  return (
    <div className="page-split">
      <Sidebar />

      <div className="right-side">
        <h1>OFFER</h1>
        <Introduction />
        <Skills />
      </div>
    </div>
  );
};

export default Offer;