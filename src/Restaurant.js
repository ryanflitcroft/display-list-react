import React from 'react';

export default function Restaurant({ restaurant }) {
  return (
    <div>
      <p>{restaurant.name} is a {restaurant.cuisine} restaurant located in {restaurant.location}. Their menu can be viewed <a href={restaurant.menu} target='_blank' rel='noreferrer'>here</a>.</p>
      
    </div>
  );
}
