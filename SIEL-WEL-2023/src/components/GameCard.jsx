import React from "react";

function GameCard({ game }) {
  const { gameNo, home, away, conference, day, date, time, court, location } =
    game;

  return (
    <div className="GameCard">
      <h2>
        {home} vs {away}
      </h2>
      {/* <h3>HELLO TJHIS IS THE GAME CARD </h3> */}
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
    </div>
  );
}

export default GameCard;
