import React, { useState, useEffect } from "react";
import Lizard from "../atoms/Lizard";
import Paper from "../atoms/Paper";
import Rock from "../atoms/Rock";
import Scissors from "../atoms/Scissors";
import Spock from "../atoms/Spock";

const options = ["rock", "paper", "scissors", "lizard", "spock"];
const optionComponents = [Rock, Paper, Scissors, Lizard, Spock];
const winConditions = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

const GameWithOtherPlayer = () => {
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [result, setResult] = useState(null);
  const [player1Wins, setPlayer1Wins] = useState(0);
  const [player2Wins, setPlayer2Wins] = useState(0);

  useEffect(() => {
    if (player1Choice && player2Choice) {
      determineWinner(player1Choice, player2Choice);
    }
  }, [player1Choice, player2Choice]);

  const playGame = (player, choice) => {
    if (player === 1) {
      setPlayer1Choice(choice);
    } else {
      setPlayer2Choice(choice);
    }
  };

  const determineWinner = (player1Choice, player2Choice) => {
    if (player1Choice === player2Choice) {
      setResult("It's a tie!");
    } else if (winConditions[player1Choice].includes(player2Choice)) {
      setResult("Player 1 wins!");
      setPlayer1Wins(player1Wins + 1);
    } else {
      setResult("Player 2 wins!");
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

  return (
    <div>
      <h1>Rock Paper Scissors Lizard Spock</h1>
      <div>
        {optionComponents.map((OptionComponent, index) => (
          <OptionComponent
            key={options[index]}
            context="on-game"
            onClick={() => playGame(1, options[index])}
            disabled={!!player1Choice}
          />
        ))}
      </div>
      <div>
        {optionComponents.map((OptionComponent, index) => (
          <OptionComponent
            key={options[index]}
            context="on-game"
            onClick={() => playGame(2, options[index])}
            disabled={!!player2Choice}
          />
        ))}
      </div>
      {player1Choice && player2Choice && (
        <>
          <h2>Result: {result}</h2>
          <h2>Player 1: {player1Choice}</h2>
          <h2>Player 2: {player2Choice}</h2>
          <h2>Player 1 Wins: {player1Wins}</h2>
          <h2>Player 2 Wins: {player2Wins}</h2>
          <button onClick={playAgain}>Play Again</button>
          <button onClick={resetGame}>Reset Game</button>
        </>
      )}
    </div>
  );
};

export default GameWithOtherPlayer;
