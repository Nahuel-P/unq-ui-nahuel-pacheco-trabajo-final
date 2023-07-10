import React, { useState } from "react";
import GameScreen from "../organisms/GameScreen";
import RulesScreen from "../organisms/RulesScreen";
import Popout from "../organisms/Popout";
import "./MainScreen.css";
import logo from "../atoms/welcome-screen.png";
import { FaHome } from "react-icons/fa";

const MainScreen = () => {
  const [stage, setStage] = useState("welcome");
  const [isPopoutVisible, setPopoutVisible] = useState(false);
  const closeModal = () => setPopoutVisible(false);

  const showInstructions = () => setStage("instructions");
  const gameMode = () => setPopoutVisible(true);
  const showMain = () => setStage("welcome");

  let mainContent;
  if (stage === "welcome") {
    mainContent = (
      <div>
        <h1 className="main-title">Piedra, Papel, Tijeras, Lagarto ó Spock!</h1>
        <img src={logo} className="logo" alt="game-logo" />
        <h2 className="welcome">¡Bienvenido!</h2>
        <h3 className="choice-how-to-play">¿Sabés cómo jugar?</h3>
        <div className="button-container">
          <button className="button" onClick={gameMode}>
            Sí
          </button>
          <button className="button" onClick={showInstructions}>
            No
          </button>
        </div>
      </div>
    );
  } else if (stage === "instructions") {
    mainContent = <RulesScreen showGameScreen={gameMode} />;
  } else if (stage === "gameSingle" || stage === "gameMulti") {
    mainContent = <GameScreen gameMode={stage} />;
  }

  return (
    <div className="layout">
      <div className="content">
        {stage !== "welcome" && (
          <button className="home-button" onClick={showMain}>
            <FaHome />
          </button>
        )}
        {mainContent}
      </div>
      {isPopoutVisible && (
        <Popout
          onSinglePlayerClick={() => {
            setStage("gameSingle");
            closeModal();
          }}
          onTwoPlayersClick={() => {
            setStage("gameMulti");
            closeModal();
          }}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default MainScreen;
