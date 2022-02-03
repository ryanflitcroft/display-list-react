import React from 'react';
import MovieItem from './MovieItem';

export default function MoviesList({ movies }) {
  return (
    <section>
      {movies.map((movie, i) => 
        <MovieItem key={movie + i} movie={movie} />
      )}
    </section>
  );
}
