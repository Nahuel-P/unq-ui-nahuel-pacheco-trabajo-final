import React from "react";
import spock from "./spock.png";
import "./icons_styles.css";

const Spock = ({context}) => {
  return <img src={spock} alt="Spock" className={context} />;
};

export default Spock;
