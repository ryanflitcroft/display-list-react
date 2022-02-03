import React from 'react';

export default function DogItem({ dog }) {
  return (
    <div>
      <p><span className='color1'>{dog.name}</span> is a <span className='color2'>{dog.age}</span> year old <span className='color3'>{dog.breed}</span> who enjoys:</p>
      {dog.likes.map((like, i) => 
        <p key={like, i}><span className='color4'>{like}</span></p>
      )}
    </div>
  );
}
