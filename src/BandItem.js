import React from 'react';

export default function BandItem({ band }) {

  return (
    <div>
      <p><span className='color1'>{band.name}</span> is a <span className='color2'>{band.genre}</span> band formed in <span className='color3'>{band.year}</span>. Their albums include:</p>
      {band.albums.map((album, i) => 
        <p key={album, i}><span className='color4'>{album}</span></p>
      )}
    </div>
  );
}
