import React from "react";
import CloseX from "../../components/CloseX";
import Introduction from "../../components/Introduction";
import { HashLink } from "react-router-hash-link";
import Button from "../../components/CustomButton";

const style = {
  backgroundColor: "white",
  height: "100vh",
  padding: "60px"
};


const Propos = () => {

  return (
    <div className="intro-mod" style={style}>
      <a href="/offer">
        <CloseX />
      </a>

      <Button label={"qdklsfjlkqds"}>
        <HashLink to="offer#mobile"></HashLink>
      </Button>

      <Introduction />

    </div>
  );
};

export default Propos;