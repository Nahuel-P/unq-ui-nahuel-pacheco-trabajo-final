import React from "react";
import scissors from "./scissors.png";
import "./icons_styles.css";

const Scissors = ({ context, onClick, disabled }) => {
  return (
    <img
      src={scissors}
      alt="scissors"
      className={`${context} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    />
  );
};

export default Scissors;
