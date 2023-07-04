import React from "react";
import paper from "./paper.png";
import "./icons_styles.css";

const Paper = ({context}) => {
  return <img src={paper} alt="paper" className={context} />;
};

export default Paper;
