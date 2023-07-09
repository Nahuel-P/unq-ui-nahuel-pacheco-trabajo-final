import React, { useState } from "react";
import GameScreen from "../organisms/GameScreen";
import RulesScreen from "../organisms/RulesScreen";
import "./MainScreen.css";
import logo from "../atoms/welcome-screen.png";

const MainScreen = () => {
  const [stage, setStage] = useState("welcome");

  const showInstructions = () => setStage("instructions");
  const game = () => setStage("game");

  let content;
  if (stage === "welcome") {
    content = (
      <div>
        <h1 className="main-title">Piedra, Papel, Tijeras, Lagarto ó Spock!</h1>
        <img src={logo} className="logo" alt="game-logo" />
        <h2 className="welcome">¡Bienvenido!</h2>
        <h3 className="choice-how-to-play">¿Sabés cómo jugar?</h3>
        <div className="button-container">
          <button className="button" onClick={game}>Sí</button>
          <button className="button" onClick={showInstructions}>No</button>
        </div>
      </div>
    );
  } else if (stage === "instructions") {
    content = <RulesScreen showGameScreen={game} />;
  } else if (stage === "game") {
    content = <GameScreen withBot={true} />;
  }

  return (
    <div className="layout">
      <div className="content">{content}</div>
    </div>
  );
};

export default MainScreen;
