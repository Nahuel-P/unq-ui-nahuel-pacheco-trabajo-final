import React from "react";
import rock from "./rock.png";
import "./icons_styles.css";

const Rock = ({ context, onClick, disabled }) => {
  return (
    <img
      src={rock}
      alt="rock"
      className={`${context} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    />
  );
};

export default Rock;
