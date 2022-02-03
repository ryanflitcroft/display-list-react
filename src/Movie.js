import React from 'react';

export default function Movie({ movie }) {
  return (
    <div>
      <p>{movie.title} is a {movie.genre} movie, released in the year {movie.year}, starring:</p>
      {movie.cast.map((cast, i) => 
        <p key={cast, i}>{cast}</p>
      )}
    </div>
  );
}
