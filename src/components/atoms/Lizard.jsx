import React from "react";
import lizard from "./lizard.png";
import "./icons_styles.css";

const Lizard = ({ context, onClick, disabled }) => {
  return (
    <img
      src={lizard}
      alt="lizard"
      className={`${context} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    />
  );
};

export default Lizard;
