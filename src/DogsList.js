import React from 'react';
import DogItem from './DogItem';

export default function DogsList({ dogs }) {
  return (
    <section>
      {dogs.map((dog, i) => 
        <DogItem key={dog + i} dog={dog} />
      )}
    </section>
  );
}
