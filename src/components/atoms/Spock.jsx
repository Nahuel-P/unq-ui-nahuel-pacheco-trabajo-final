import React from "react";
import spock from "./spock.png";
import "./icons_styles.css";

const Spock = ({ context, onClick, disabled }) => {
  return (
    <img
      src={spock}
      alt="spock"
      className={`${context} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    />
  );
};

export default Spock;
