import React, { useState } from 'react';
import GameWithBot from './GameWithBot';
import GameWithOtherPlayer from './GameWithOtherPlayer';

function GameScreen() {
  const [isBotGame, setIsBotGame] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleButtonClick = (isBotGame) => {
    setIsGameStarted(true);
    setIsBotGame(isBotGame);
  };

  return (
    <div>
      <h1>Modo de juego</h1>
      <button onClick={() => handleButtonClick(true)}>1 Jugador (vs Bot)</button>
      <button onClick={() => handleButtonClick(false)}>2 Jugadores (vs otro jugador)</button>
      
      {isGameStarted && (isBotGame ? <GameWithBot /> : <GameWithOtherPlayer />)}
    </div>
  );
}

export default GameScreen;
