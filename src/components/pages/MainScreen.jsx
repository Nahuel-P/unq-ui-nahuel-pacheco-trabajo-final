import React, { useState } from "react";
import GameScreen from "../organisms/GameScreen";
import RulesScreen from "../organisms/RulesScreen";
import SettingsScreen from "../organisms/SettingsScreen";
import "./MainScreen.css";

const MainScreen = () => {
  const [stage, setStage] = useState("welcome");

  const settings = () => setStage("settings");
  const showInstructions = () => setStage("instructions");

  let content;
  if (stage === "welcome") {
    content = (
      <div>
        <h1>Rock, Paper, Scissors, Lizard or Spock!</h1>
        <h2>Bienvenido!</h2>
        <h3>¿Sabés cómo jugar?</h3>
        <button onClick={settings}>¡Sí! :D</button>
        <button onClick={showInstructions}>¡No! :(</button>
      </div>
    );
  } else if (stage === "instructions") {
    content = <RulesScreen settings={settings} />;
  } else if (stage === "settings") {
    content = <SettingsScreen />;
  } else if (stage === "game") {
    content = <GameScreen />;
  }

  return (
    <div className="layout">
      <div className="content">{content}</div>
    </div>
  );
};

export default MainScreen;
