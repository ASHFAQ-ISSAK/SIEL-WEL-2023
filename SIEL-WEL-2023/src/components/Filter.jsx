import React, { useState } from "react";

const Filter = ({ games }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }
  const filteredGames = games.filter((game) => {
    const values = Object.values(game);
    const stringifiedValues = values.join(" ").toLowerCase();
    return stringifiedValues.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="filteredSearch">
      <label></label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a game"
      />
      <div className="filteredResults">
        {filteredGames.map((game) => (
          <div id="card">
            <h4>
              <span>{game.gameNo}</span>
              <span>{game.date}</span>
            </h4>
            <h3>
              <span className="homeTeam">{game.home}</span> vs{" "}
              <span className="awayTeam">{game.away}</span>
            </h3>
            <p>
              Location:<span> . . </span> {game.location}
            </p>
            <p>
              Date:<span> . . . </span> {game.date}
            </p>
            <p>Venue: {game.court}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
