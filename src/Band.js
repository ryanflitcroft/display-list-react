import React from 'react';

export default function Band({ band }) {
  console.log('||', band);
  return (
    <div>
      <p>{band.name} is a {band.genre} band formed in {band.year}. Their albums include:</p>
      {band.albums.map((album, i) => 
        <p key={album, i}>{album}</p>
      )}
    </div>
  );
}
