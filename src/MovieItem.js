import React from 'react';

export default function MovieItem({ movie }) {
  return (
    <div>
      <p><span className='color1'>{movie.title}</span> is a <span className='color2'>{movie.genre}</span>, released in the year <span className='color3'>{movie.year}</span>, starring:</p>
      {movie.cast.map((cast, i) => 
        <p key={cast, i}><span className='color4'>{cast}</span></p>
      )}
    </div>
  );
}
