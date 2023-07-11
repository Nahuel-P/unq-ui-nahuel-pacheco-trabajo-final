import React from "react";
import "./Popout.css";
import Spock from "../atoms/Spock";
import Scissors from "../atoms/Scissors";
import Rock from "../atoms/Rock";
import Lizard from "../atoms/Lizard";
import Paper from "../atoms/Paper";


const RulesPopout = ({onClose }) => {
  return (
    <div className="backdrop-rules backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2 className="title-popout title-popout-rules">Reglas</h2>
        <div className="rules-list">
        <ul className="rules-column">
          <li className="rules-item">
            <Rock context="rules-screen" />
            <span className="text_rules">Aplasta a</span>
            <Scissors context="rules-screen" />
          </li>
          <li className="rules-item">
            <Rock context="rules-screen" />
            <span className="text_rules">Aplasta a</span>
            <Lizard context="rules-screen" />
          </li>
          <li className="rules-item">
            <Paper context="rules-screen" />
            <span className="text_rules">Tapa a </span>
            <Rock context="rules-screen" />
          </li>
          <li className="rules-item">
            <Paper context="rules-screen" />
            <span className="text_rules">Desautoriza a</span>
            <Spock context="rules-screen" />
          </li>
          <li className="rules-item">
            <Scissors context="rules-screen" />
            <span className="text_rules">Corta a </span>
            <Paper context="rules-screen" />
          </li>
        </ul>
        <ul className="rules-column">
        <li className="rules-item">
            <Scissors context="rules-screen" />
            <span className="text_rules">Decapita a</span>
            <Lizard context="rules-screen" />
          </li>
          <li className="rules-item">
            <Spock context="rules-screen" />
            <span className="text_rules">Rompe a</span>
            <Scissors context="rules-screen" />
          </li>
          <li className="rules-item">
            <Spock context="rules-screen" />
            <span className="text_rules">Vaporiza a</span>
            <Rock context="rules-screen" />
          </li>
          <li className="rules-item">
            <Lizard context="rules-screen" />
            <span className="text_rules">Envenena a</span>
            <Spock context="rules-screen" />
          </li>
          <li className="rules-item">
            <Lizard context="rules-screen" />
            <span className="text_rules">Devora a</span>
            <Paper context="rules-screen" />
          </li>
        </ul>
      </div>
          <button className="button-rules" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
export default RulesPopout;
