import React from 'react';
import RestaurantItem from './RestaurantItem';

export default function RestaurantsList({ restaurants }) {
  return (
    <section>
      {restaurants.map((restaurant, i) => 
        <RestaurantItem key={restaurant + i} restaurant={restaurant} />
      )}
    </section>
  );
}
