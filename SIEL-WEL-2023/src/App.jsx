import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Schedule from "./components/Schedule";
import Filter from "./components/Filter";
import AddGame from "./components/Addgame";
import GameCard from "./components/GameCard";
import axios from "axios";

function App() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/games")
      .then((response) => {
        setGames(response.data);
        setFilteredGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function filterGames(searchTerm) {
    const filtered = games.filter((game) => {
      // Convert all properties to lower case for case-insensitive search
      const home = game.home.toLowerCase();
      const away = game.away.toLowerCase();
      const conference = game.conference.toLowerCase();
      const day = game.day.toLowerCase();
      const date = game.date.toLowerCase();
      const time = game.time.toLowerCase();
      const court = game.court.toLowerCase();
      const location = game.location.toLowerCase();

      // Check if any property matches the search term
      return (
        home.includes(searchTerm.toLowerCase()) ||
        away.includes(searchTerm.toLowerCase()) ||
        conference.includes(searchTerm.toLowerCase()) ||
        day.includes(searchTerm.toLowerCase()) ||
        date.includes(searchTerm.toLowerCase()) ||
        time.includes(searchTerm.toLowerCase()) ||
        court.includes(searchTerm.toLowerCase()) ||
        location.includes(searchTerm.toLowerCase())
      );
    });
    setFilteredGames(filtered);
  }
  function handleAddGame(newGame) {
    axios
      .post("http://localhost:4000/games", newGame)
      .then((response) => {
        // Update the state with the new game added
        setGames([...games, response.data]);
        setFilteredGames([...filteredGames, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div id="App">
      <div className="mainnav">
        <div id="topbar">
          <img src="/src/assets/152961aa-5e95-413b-b4bb-818dac96e7d4.svg" />
          <h2 className="title">Street Insider Exposure League</h2>
          <h2>
            The league has 16 team grouped in two conferences NORTH and SOUTH.
            With playoffs to determine conference champions who play for the
            <span className="emphasis"> SIEL </span>championship Crown.{" "}
          </h2>
          <div className="route-links">
            <Nav />
            <Routes>
              <Route
                path="filter"
                element={
                  <Filter games={games} setFilteredGames={setFilteredGames} />
                }
              />

              <Route
                path="gamelist"
                element={
                  <Schedule
                    games={filteredGames}
                    setSelectedGame={setSelectedGame}
                    setFilteredGames={setFilteredGames}
                  />
                }
              />
              <Route
                path="addgame"
                element={<AddGame onAddGame={handleAddGame} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
