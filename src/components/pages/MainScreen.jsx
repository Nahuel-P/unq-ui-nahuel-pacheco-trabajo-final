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
        <h1>Rock, Paper, Scissors, Lizard or Spock!</h1>
        <img src={logo} className="logo" alt="game-logo" />
        <h2>Bienvenido!</h2>
        <h3>¿Sabés cómo jugar?</h3>
        <button onClick={game}>¡Sí! :D</button>
        <button onClick={showInstructions}>¡No! :(</button>
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
