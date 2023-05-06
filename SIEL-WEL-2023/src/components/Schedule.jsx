import React from "react";
import GameCard from "./GameCard";

function Schedule({ games, setSelectedGame, setFilteredGames }) {
  function handleGameClick(game) {
    setSelectedGame(game);
  }

  function handleGameDelete(id) {
    const updatedGames = games.filter((game) => game.gameNo !== id);
    setFilteredGames(updatedGames);
  }

  return (
    <div className="Schedule">
      {games.map((game) => (
        <GameCard
          key={game.gameNo}
          game={game}
          handleGameClick={handleGameClick}
          handleGameDelete={handleGameDelete}
        />
      ))}
    </div>
  );
}

export default Schedule;
