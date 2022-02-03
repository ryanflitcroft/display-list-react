import React from 'react';
import Dog from './Dog';

export default function Dogs({ dogs, setDogs }) {
  return (
    <section>
      {dogs.map((dog, i) => 
        <Dog key={dog + i} dog={dog} />
      )}
    </section>
  );
}
