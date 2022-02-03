import React from 'react';
import Band from './Band';

export default function Bands({ bands }) {
  return (
    <section>
      {bands.map((band, i) => 
        <Band key={band + i} band={band} />
      )}
    </section>
  );
}
