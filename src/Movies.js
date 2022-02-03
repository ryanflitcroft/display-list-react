import React from 'react';
import Movie from './Movie';

export default function Movies({ movies }) {
  return (
    <section>
      {movies.map((movie, i) => 
        <Movie key={movie + i} movie={movie} />
      )}
    </section>
  );
}
