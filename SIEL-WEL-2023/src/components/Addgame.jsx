import { useState } from "react";

function AddGame({ onAddGame }) {
  const [gameNo, setGameNo] = useState("");
  const [home, setHome] = useState("");
  const [away, setAway] = useState("");
  const [conference, setConference] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [court, setCourt] = useState("");
  const [location, setLocation] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const newGame = {
      gameNo,
      home,
      away,
      conference,
      day,
      date,
      time,
      court,
      location,
    };

    try {
      const response = await fetch("http://localhost:4000/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGame),
      });
      if (response.ok) {
        const data = await response.json();
        onAddGame(data);
        setGameNo("");
        setHome("");
        setAway("");
        setConference("");
        setDay("");
        setDate("");
        setTime("");
        setCourt("");
        setLocation("");
      } else {
        // throw new Error("Unable to add game");
      }
    } catch (error) {
      console.error(error);
      console.log(error.response);
    }
  }

  return (
    <div className="AddGame">
      <h3>Add a New Game</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Game Number:
          <input
            type="text"
            value={gameNo}
            onChange={(event) => setGameNo(event.target.value)}
          />
        </label>
        <label>
          Home Team:
          <input
            type="text"
            value={home}
            onChange={(event) => setHome(event.target.value)}
          />
        </label>
        <label>
          Away Team:
          <input
            type="text"
            value={away}
            onChange={(event) => setAway(event.target.value)}
          />
        </label>
        <label>
          Conference:
          <input
            type="text"
            value={conference}
            onChange={(event) => setConference(event.target.value)}
          />
        </label>
        <label>
          Day:
          <input
            type="text"
            value={day}
            onChange={(event) => setDay(event.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="text"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="text"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </label>
        <label>
          Court:
          <input
            type="text"
            value={court}
            onChange={(event) => setCourt(event.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
}

export default AddGame;
