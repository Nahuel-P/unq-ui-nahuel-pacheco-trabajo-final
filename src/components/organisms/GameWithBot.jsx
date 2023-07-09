import React, { useState } from "react";

const options = ["piedra", "papel", "tijeras", "lagarto", "spock"];

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
    } else if (
      (userChoice === "piedra" && (botChoice === "tijeras" || botChoice === "lagarto")) ||
      (userChoice === "papel" && (botChoice === "piedra" || botChoice === "spock")) ||
      (userChoice === "tijeras" && (botChoice === "papel" || botChoice === "lagarto")) ||
      (userChoice === "lagarto" && (botChoice === "papel" || botChoice === "spock")) ||
      (userChoice === "spock" && (botChoice === "piedra" || botChoice === "tijeras"))
    ) {
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
        {options.map((option) => (
          <button key={option} onClick={() => playGame(option)}>
            {option}
          </button>
        ))}
      </div>
      <h2>Usuario: {userChoice}</h2>
      <h2>Bot: {botChoice}</h2>
      <h2>{result}</h2>
      <h2>Ganadas: {userWins}</h2>
      <h2>Ganadas por bot: {botWins}</h2>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default GameWithBot;
