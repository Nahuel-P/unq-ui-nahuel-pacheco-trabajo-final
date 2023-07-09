import React from "react";
import "./Popout.css";

const Popout = ({ onSinglePlayerClick, onTwoPlayersClick, onClose }) => {
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h1>Choose Game Mode</h1>
        <button onClick={onSinglePlayerClick}>1 Jugador</button>
        <button onClick={onTwoPlayersClick}>2 Jugadores</button>
      </div>
    </div>
  );
}
export default Popout;
