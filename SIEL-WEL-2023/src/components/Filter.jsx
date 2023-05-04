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
      <label>Search</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for A game"
      />
      <div className="filteredResults">
        {filteredGames.map((game) => (
          <div>
            <h4>
              {game.home} vs {game.away}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
