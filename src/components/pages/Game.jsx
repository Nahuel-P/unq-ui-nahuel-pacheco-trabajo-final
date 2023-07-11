import React, { useState, useEffect } from "react";
import Lizard from "../atoms/Lizard";
import Paper from "../atoms/Paper";
import Rock from "../atoms/Rock";
import Scissors from "../atoms/Scissors";
import Spock from "../atoms/Spock";
import "./Game.css";
import RulesPopout from "../organisms/RulesPopout";

const options = ["rock", "paper", "scissors", "lizard", "spock"];
const optionComponents = {
  rock: Rock,
  paper: Paper,
  scissors: Scissors,
  lizard: Lizard,
  spock: Spock,
};
const winConditions = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

const Game = ({ isMultiplayer }) => {
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [result, setResult] = useState(null);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);
  const [isRulesVisible, setRulesVisibility] = useState(false);

  const hideRules = () => setRulesVisibility(false);

  useEffect(() => {
    if (player1Choice && player2Choice) {
      determineWinner(player1Choice, player2Choice);
    }
  }, [player1Choice, player2Choice]);

  const playGame = (player, choice) => {
    if (player === 1) {
      setPlayer1Choice(choice);
      if (!isMultiplayer) {
        const randomIndex = Math.floor(Math.random() * options.length);
        const botChoice = options[randomIndex];
        setPlayer2Choice(botChoice);
      }
    } else {
      setPlayer2Choice(choice);
    }
  };

  const determineWinner = (player1Choice, player2Choice) => {
    if (player1Choice === player2Choice) {
      setResult("¡Empate!");
    } else if (winConditions[player1Choice].includes(player2Choice)) {
      setResult(isMultiplayer ? "¡Jugador 1 gana!" : "¡Ganaste!");
      setPlayer1Wins(player1Wins + 1);
    } else {
      setResult(isMultiplayer ? "¡Jugador 2 gana!" : "¡El bot gana!");
      setPlayer2Wins(player2Wins + 1);
    }
  };

  const resetGame = () => {
    setPlayer1Choice(null);
    setPlayer2Choice(null);
    setResult(null);
    setPlayer1Wins(0);
    setPlayer2Wins(0);
  };

  const playAgain = () => {
    setPlayer1Choice(null);
    setPlayer2Choice(null);
    setResult(null);
  };

  const OptionComponent = optionComponents[player1Choice];
  const OptionComponent2 = optionComponents[player2Choice];

  return (
    <div className="game-container">
      <button className="rules-button" onClick={() => setRulesVisibility(true)}>Reglas</button>
      {isRulesVisible && (<RulesPopout onClose={hideRules}/>)}
      <h1 className="game-title">{isMultiplayer ? 'Multijugador' : 'Jugando con bot'}</h1>
      <div className="options-container">
        <div className="column">
          <h2>{isMultiplayer ? 'Jugador 1' : 'Usuario'}</h2>
          {options.map((option) => {
            const OptionComponent = optionComponents[option];
            return (
              <OptionComponent
                key={option}
                context="on-game"
                onClick={() => playGame(1, option)}
                disabled={!!player1Choice}
              />
            );
          })}
          <div className="choice-text">
            {player1Choice && player2Choice && (
              <>
                <p>{isMultiplayer ? 'Jugador 1 eligió:' : 'Usuario eligió:'}</p>
                <OptionComponent key={player1Choice} context="result" />
              </>
            )}
          </div>
        </div>
        <div className="column">
          <h2>{isMultiplayer ? 'Jugador 2' : 'Bot'}</h2>
          {options.map((option) => {
            const OptionComponent = optionComponents[option];
            return (
              <OptionComponent
                key={option}
                context="on-game"
                onClick={() => isMultiplayer && playGame(2, option)}
                disabled={isMultiplayer ? !!player2Choice : true}
              />
            );
          })}
          <div className="choice-text">
            {player1Choice && player2Choice && (
              <>
                <p>{isMultiplayer ? 'Jugador 2 eligió:' : 'Bot eligió:'}</p>
                <OptionComponent2 key={player2Choice} context="result" />
              </>
            )}
          </div>
        </div>
      </div>
      {player1Choice && player2Choice && result && (
        <div className="result-container">
          <h2 className="result-text">{result}</h2>
          <div className="score">
            <p>Puntaje: {player1Wins}</p>
            <p>Puntaje: {player2Wins}</p>
          </div>
          <button className="game-button" onClick={playAgain}>Jugar de nuevo</button>
          <button className="game-button" onClick={resetGame}>Reiniciar puntaje</button>
        </div>
      )}
    </div>
  );
};

export default Game;
