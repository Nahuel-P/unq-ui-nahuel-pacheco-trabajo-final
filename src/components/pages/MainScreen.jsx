import React, { useState } from "react";
import GameScreen from "../organisms/GameScreen";
import InstructionScreen from "../organisms/InstructionsScreen";
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
        <h1>Rock, papers, scissors, lizard or spock!</h1>
        <h2>Bienvenido!</h2>
        <h3>¿Sabés cómo jugar?</h3>
        <button onClick={settings}>Si! :D</button>
        <button onClick={showInstructions}>No :(</button>
      </div>
    );
  } else if (stage === "instructions") {
    content = <InstructionScreen startGame={settings} />;
  } else if (stage === "settings") {
    content = <SettingsScreen />;
  }

  return (
    <div className="layout">
      <div className="content">{content}</div>
    </div>
  );
};

export default MainScreen;
