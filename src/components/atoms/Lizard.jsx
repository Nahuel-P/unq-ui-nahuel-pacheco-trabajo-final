import React from "react";
import lizard from "./lizard.png";
import "./icons_styles.css";

const Lizard = ({context}) => {
  return <img src={lizard} alt="lizard" className={context} />;
};

export default Lizard;
