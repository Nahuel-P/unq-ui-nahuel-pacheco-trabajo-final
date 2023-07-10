import React, { useState } from "react";
import Lizard from "../atoms/Lizard";
import Paper from "../atoms/Paper";
import Rock from "../atoms/Rock";
import Scissors from "../atoms/Scissors";
import Spock from "../atoms/Spock";

const options = ["piedra", "papel", "tijeras", "lagarto", "spock"];
const optionComponents = [Rock, Paper, Scissors, Lizard, Spock];
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

  return (
    <div>
      <h1>Jugando con bot</h1>
      <div>
        {optionComponents.map((OptionComponent, index) => (
          <OptionComponent
            key={options[index]}
            context="on-game"
            onClick={() => playGame(options[index])}
          />
        ))}
      </div>
      {userChoice && botChoice && (
        <>
          <h2>Usuario: {userChoice}</h2>
          <h2>Bot: {botChoice}</h2>
          <h2>{result}</h2>
          <h2>Ganadas: {userWins}</h2>
          <h2>Ganadas por bot: {botWins}</h2>
          <button onClick={resetGame}>Reset Game</button>
        </>
      )}
    </div>
  );
};

export default GameWithBot;
