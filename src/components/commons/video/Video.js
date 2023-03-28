import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import videoPath1 from '../../../../src/capitulo1.mp4';
import videoPath2 from '../../../../src/capitulo2.mp4';

const Video = () => {
  const [videoUrl, setVideoUrl] = useState(videoPath1);

  const handleButtonClick = () => {
    setVideoUrl(videoPath2);
  };

  return (
    <div className="player-wrapper">
      <ReactPlayer  
        className='react-player'
        controls
        url={videoUrl}
        width='100%'
        height='90%'
      />
      <button onClick={handleButtonClick}>Cambiar video</button>
    </div> 
  );
};

export { Video };
