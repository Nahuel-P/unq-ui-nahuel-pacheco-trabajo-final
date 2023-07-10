import React, { useState } from "react";
import Lizard from "../atoms/Lizard";
import Paper from "../atoms/Paper";
import Rock from "../atoms/Rock";
import Scissors from "../atoms/Scissors";
import Spock from "../atoms/Spock";
import "./Game.css";

const options = ["piedra", "papel", "tijeras", "lagarto", "spock"];
const optionComponents = {
  piedra: Rock,
  papel: Paper,
  tijeras: Scissors,
  lagarto: Lizard,
  spock: Spock,
};
const winConditions = {
  piedra: ["tijeras", "lagarto"],
  papel: ["piedra", "spock"],
  tijeras: ["papel", "lagarto"],
  lagarto: ["papel", "spock"],
  spock: ["piedra", "tijeras"],
};

const GameWithBot = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [botChoice, setBotChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userWins, setUserWins] = useState(0);
  const [botWins, setBotWins] = useState(0);

  const playGame = (userChoice) => {
    setUserChoice(userChoice);
    const randomIndex = Math.floor(Math.random() * options.length);
    const botChoice = options[randomIndex];
    setBotChoice(botChoice);
    determineWinner(userChoice, botChoice);
  };

  const determineWinner = (userChoice, botChoice) => {
    if (userChoice === botChoice) {
      setResult("Empate!");
    } else if (winConditions[userChoice].includes(botChoice)) {
      setResult("Ganaste!");
      setUserWins(userWins + 1);
    } else {
      setResult("El bot gana!");
      setBotWins(botWins + 1);
    }
  };

  const resetGame = () => {
    setUserChoice(null);
    setBotChoice(null);
    setResult(null);
    setUserWins(0);
    setBotWins(0);
  };

  const OptionComponent = optionComponents[userChoice];
  const OptionComponent2 = optionComponents[botChoice];

  return (
    <div>
      <h1>Jugando con bot</h1>
      <div className="options-container">
        <div className="column">
          <h2>Usuario</h2>
          {options.map((option) => {
            const OptionComponent = optionComponents[option];
            return (
              <OptionComponent
                key={option}
                context="on-game"
                onClick={() => playGame(option)}
              />
            );
          })}
          <div className="choice-text">
            {userChoice && botChoice && (
              <>
                <p>Usuario eligió:</p>
                <OptionComponent key={userChoice} context="result" />
              </>
            )}
          </div>
        </div>
        <div className="column">
          <h2>Bot</h2>
          {options.map((option) => {
            const OptionComponent = optionComponents[option];
            return (
              <OptionComponent
                key={option}
                context="on-game"
                onClick={() => {}}
                disabled={true}
              />
            );
          })}
          <div className="choice-text">
            {userChoice && botChoice && (
              <>
                <p>Bot eligió:</p>
                <OptionComponent2 key={botChoice} context="result" />
              </>
            )}
          </div>
        </div>
      </div>
      {userChoice && botChoice && result && (
        <div className="result-container">
          <h2 className="result-text">{result}</h2>
          <div className="score">
            <p>Puntaje: {userWins}</p>
            <p>Puntaje: {botWins}</p>
          </div>
          <button className="button" onClick={resetGame}>Reiniciar Puntaje</button>
        </div>
      )}
    </div>
  );
};

export default GameWithBot;
