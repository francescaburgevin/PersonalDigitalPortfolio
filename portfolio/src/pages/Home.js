import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {

  return (
    <div className="page-split">
      <div>
        <Navigation />
      </div>

      <div>
        <h1>Home page</h1>
      </div>
    </div>
  );
};

export default Home;