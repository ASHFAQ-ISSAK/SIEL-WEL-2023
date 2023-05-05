import React from "react";

function DeleteGame({ home, onDelete }) {
  function handleDelete() {
    fetch(`http://localhost:4000/games/${home}`, {
      method: "DELETE",
    })
      .then(() => {
        onDelete(home);
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
