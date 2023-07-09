import React from "react";
import "./Popout.css";

const Popout = ({ onSinglePlayerClick, onTwoPlayersClick, onClose }) => {
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2 className="title-popout">Modo de juego</h2>
        <button className="button-popout" onClick={onSinglePlayerClick}>1 Jugador</button>
        <button className="button-popout" onClick={onTwoPlayersClick}>2 Jugadores</button>
      </div>
    </div>
  );
}
export default Popout;
