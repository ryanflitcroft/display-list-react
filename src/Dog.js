import React from 'react';

export default function Dog({ dog }) {
  return (
    <>
      <p>{dog.name}</p>
      <p>{dog.breed}</p>
      <p>{dog.age}</p>
      {dog.likes.map((like, i) => 
        <p key={like, i}>{like}</p>
      )}
    </>
  );
}
