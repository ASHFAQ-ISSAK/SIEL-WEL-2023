import React from "react";
import DeleteGame from "./Deletegame";

function GameCard({ game, handleGameClick, handleGameDelete }) {
  const { gameNo, home, away, conference, day, date, time, court, location } =
    game;

  function handleDelete() {
    handleGameDelete(gameNo);
  }

  return (
    <div className="GameCard">
      <h2>
        {home} vs {away}
      </h2>
      <p>
        <span>Game No: </span>
        {gameNo}
      </p>
      <p>
        <span>Conference: </span>
        {conference}
      </p>
      <p>
        <span>Day: </span>
        {day}
      </p>
      <p>
        <span>Date: </span>
        {date}
      </p>
      <p>
        <span>Time: </span>
        {time}
      </p>
      <p>
        <span>Court: </span>
        {court}
      </p>
      <p>
        <span>Location: </span>
        {location}
      </p>
      <DeleteGame gameNo={gameNo} onDelete={handleDelete} />
    </div>
  );
}

export default GameCard;
