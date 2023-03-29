import React from 'react';
import  { Video } from '../video/Video.js';

function Intro() {
  const handleClick = () => {
    <Video/>
  };

  return (
    <div>
      <h1>Componente Intro</h1>
      <button onClick={handleClick}>Comenzar</button>
    </div>
  );
}

export { Intro } ;
