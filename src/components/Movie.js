import React from "react";

export default function Movie({ movie, onToggleWatched, onDeleteMovie }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={movie.watched}
        onChange={() => onToggleWatched(movie.id)}
      />
      <span
        style={{
          textDecoration: movie.watched ? "line-through" : "none",
        }}
      >
        {movie.title}
      </span>
      <button onClick={() => onDeleteMovie(movie.id)}>Delete</button>
    </li>
  );
}
