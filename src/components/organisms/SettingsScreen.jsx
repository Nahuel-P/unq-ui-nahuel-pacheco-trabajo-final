import React from "react";

const SettingsScreen = ({gameWithBot, gameLocal}) => {

  return (
  <>
    <h1>Modo de juego</h1>
    <button onClick={gameWithBot}> 1 Jugador (vs Bot)</button>
    <button onClick={gameLocal}> 2 Jugadores (Local)</button>
  </>
  )
};

export default SettingsScreen;