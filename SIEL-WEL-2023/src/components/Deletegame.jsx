import React from "react";

function DeleteGame({ home, onDelete }) {
  function handleDelete() {
    fetch(`https://basketball-api.onrender.com/games`, {
      method: "DELETE",
    })
      .then(() => {
        onDelete(home);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="DeleteGame">
      <button onClick={handleDelete}>Remove game</button>
    </div>
  );
}

export default DeleteGame;
