import React from 'react';
import GameWithBot from './GameWithBot';
import GameWithOtherPlayer from './GameWithOtherPlayer';

const GameScreen = ({gameMode}) => {
  return (
    <div>
      {gameMode === "gameSingle" ? <GameWithBot /> : <GameWithOtherPlayer />}
    </div>
  );
}

export default GameScreen;
