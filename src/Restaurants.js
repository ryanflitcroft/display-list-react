import React from 'react';
import Restaurant from './Restaurant';

export default function Restaurants({ restaurants }) {
  return (
    <section>
      {restaurants.map((restaurant, i) => 
        <Restaurant key={restaurant + i} restaurant={restaurant} />
      )}
    </section>
  );
}
