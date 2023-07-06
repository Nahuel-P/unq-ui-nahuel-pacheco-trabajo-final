import React from "react";

const GameScreen = ({withBot=true}) => {

  return (withBot && <div>Jugá acá</div>)
};

export default GameScreen;