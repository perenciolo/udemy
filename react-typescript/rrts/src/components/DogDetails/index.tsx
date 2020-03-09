import React, { useState } from 'react';

// import { Container } from './styles';

interface IDogDetailsProps {
  name: string;
  img: string;
  onBark: () => void;
}

export default function DogDetails({ name, img, onBark }: IDogDetailsProps) {
  const [scold, setScold] = useState(0);
  return (
    <div>
      <div>
        <h4>{name}</h4>
        <button className="bark-action" onClick={onBark}>
          Bark!
        </button>
        <div className="scolding-counter">{scold}</div>
        <button
          className="scolding-counter--add"
          onClick={() => setScold(scold + 1)}
        >
          Scold the dog
        </button>
      </div>
      <div>
        <img src={img} alt={name} width="300" height="300" />
      </div>
    </div>
  );
}
