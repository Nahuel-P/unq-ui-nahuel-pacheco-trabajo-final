import React from "react";
import Spock from "../atoms/Spock";
import Scissors from "../atoms/Scissors";
import Rock from "../atoms/Rock";
import Lizard from "../atoms/Lizard";
import Paper from "../atoms/Paper";
import "./instructionsScreen.css";

const RulesScreen = () => {
  return (
    <>
      <h1>Reglas</h1>
      <h2>Es como un piedra papel y tijera, pero tenemos más casos:</h2>
      <ul class="rules-list">
        <li className="rules-item">
          <Scissors context={"rules_screen"} />
          <span className="text_rules">Corta a </span>
          <Paper context={"rules_screen"} />
        </li>
        <li className="rules-item">
          <Paper context={"rules_screen"} />
          <span className="text_rules">Tapa a </span>
          <Rock context={"rules_screen"} />
        </li>
        <li className="rules-item">
          <Rock context={"rules_screen"} />
          <span className="text_rules">Aplasta a</span>
          <Lizard context={"rules_screen"} />
        </li>
        <li className="rules-item">
          <Lizard context={"rules_screen"} />
          <span className="text_rules">Envenena a</span>
          <Spock context={"rules_screen"} />
        </li>
        <li className="rules-item">
          <Spock context={"rules_screen"} />
          <span className="text_rules">Rompe a</span>
          <Scissors context={"rules_screen"} />
        </li>
        <li className="rules-item">
          <Scissors context={"rules_screen"} />
          <span className="text_rules">Decapita a</span>
          <Lizard context={"rules_screen"} />
        </li>
        <li className="rules-item">
          <Lizard context={"rules_screen"} />
          <span className="text_rules">Devora a</span>
          <Paper context={"rules_screen"} />
        </li>
        <li className="rules-item">
          <Paper context={"rules_screen"} />
          <span className="text_rules">Desautoriza a</span>
          <Spock context={"rules_screen"} />
        </li>
        <li className="rules-item">
          <Spock context={"rules_screen"} />
          <span className="text_rules">Vaporiza a</span>
          <Rock context={"rules_screen"} />
        </li>
        <li className="rules-item">
          <Rock context={"rules_screen"} />
          <span className="text_rules">Aplasta a</span>
          <Scissors context={"rules_screen"} />
        </li>
      </ul>

      <h3>¿Listo?</h3>
      <button>Vamo a jugar</button>
    </>
  );
};

export default RulesScreen;
