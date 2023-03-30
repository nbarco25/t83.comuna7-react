import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import videoPath1 from '../../../videos/capitulo1.mp4';
import videoPath2 from '../../../videos/capitulo2.mp4';
import videoPath3 from '../../../videos/capitulo3.mp4';
import './Video.css'

const Video = () => {
  const [videoUrl, setVideoUrl] = useState(videoPath1);
  const chapters = [
    { name: 'Construcción barrios', url: videoPath1, image: process.env.PUBLIC_URL + '/logo200px.png' },
    { name: 'Líderes sociales I', url: videoPath2, image: process.env.PUBLIC_URL + '/logo200px.png' },
    { name: 'Líderes sociales II', url: videoPath3, image: process.env.PUBLIC_URL + '/logo200px.png' },
  ];

  const handleChapterClick = (chapterUrl) => {
    setVideoUrl(chapterUrl);
  };

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        controls
        playing
        url={videoUrl}
        width="100%"
        height="-1%"
      />
      <div className="chapter-buttons">
        {chapters.map((chapter) => (
          
          <img
            key={chapter.name}
            src={chapter.image}
            alt={chapter.name}
            onClick={() => handleChapterClick(chapter.url)}
          />
        ))}
      </div>
    </div>
  );
};

export { Video };
