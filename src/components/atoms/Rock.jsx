import React from "react";
import rock from "./rock.png";
import "./icons_styles.css";

const Rock = ({context}) => {
  return <img src={rock} alt="rock" className={context} />;
};

export default Rock;
