import React from "react";
import scissors from "./scissors.png";
import "./icons_styles.css";

const Scissors = ({context}) => {
  return <img src={scissors} alt="Scissors" className={context} />;
};

export default Scissors;
