import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CV from "./pages/CV";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Offer from "./pages/Offer";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;