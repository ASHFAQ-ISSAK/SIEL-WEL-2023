import React from "react";

function DeleteGame({ gameNo, onDelete }) {
  function handleDelete() {
    fetch(`http://localhost:4000/games/${gameNo}`, {
      method: "DELETE",
    })
      .then(() => {
        onDelete(gameNo);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="DeleteGame">
      <button onClick={handleDelete}>Delete Game</button>
    </div>
  );
}

export default DeleteGame;
