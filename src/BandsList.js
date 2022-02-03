import React from 'react';
import BandItem from './BandItem';

export default function BandsList({ bands }) {
  return (
    <section>
      {bands.map((band, i) => 
        <BandItem key={band + i} band={band} />
      )}
    </section>
  );
}
