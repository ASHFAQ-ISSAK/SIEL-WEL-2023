import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import Search from "./Search";

function GameList() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setFilteredGames(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleFilter(type) {
    const filteredGames = games.filter((game) => game[type]);
    setFilteredGames(filteredGames);
  }

  function handleAddGame(newGame) {
    fetch("http://localhost:4000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame),
    })
      .then((response) => response.json())
      .then((data) => {
        setGames([...games, data]);
        setFilteredGames([...games, data]);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="GameList">
      <h1>Basketball Schedule</h1>
      <Search games={games} setFilteredGames={setFilteredGames} />
      <div className="filters">
        <button onClick={() => handleFilter("day")}>Filter by Day</button>
        <button onClick={() => handleFilter("date")}>Filter by Date</button>
        <button onClick={() => handleFilter("court")}>Filter by Court</button>
        <button onClick={() => handleFilter("time")}>Filter by Time</button>
      </div>
      <div className="games-container">
        {filteredGames.map((game) => (
          <GameCard key={game.gameNo} game={game} />
        ))}
      </div>
      <AddGameForm handleAddGame={handleAddGame} />
    </div>
  );
}

export default GameList;
