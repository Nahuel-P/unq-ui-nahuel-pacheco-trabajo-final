import React from "react";
import paper from "./paper.png";
import "./icons_styles.css";

const Paper = ({ context, onClick, disabled }) => {
  return (
    <img
      src={paper}
      alt="paper"
      className={`${context} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    />
  );
};

export default Paper;
