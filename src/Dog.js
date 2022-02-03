import React from 'react';

export default function Dog({ dog }) {
  return (
    <div>
      <p>{dog.name} is a {dog.age} year old {dog.breed} who enjoys:</p>
      {dog.likes.map((like, i) => 
        <p key={like, i}>{like} </p>
      )}
    </div>
  );
}
