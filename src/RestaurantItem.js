import React from 'react';

export default function RestaurantItem({ restaurant }) {

  return (
    <div>
      <p><span className='color1'>{restaurant.name}</span> is a <span className='color2'>{restaurant.cuisine}</span> restaurant, located in <span className='color3'>{restaurant.location}</span>.</p>
      <p>Their menu can be viewed at <span className='color4'>{restaurant.menu}</span></p>
    </div>
  );
}
