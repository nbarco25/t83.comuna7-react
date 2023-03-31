import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import intropath from '../../../videos/introvideo.mp4'
import videoPath1 from '../../../videos/capitulo1.mp4';
import videoPath2 from '../../../videos/capitulo2.mp4';
import videoPath3 from '../../../videos/capitulo3.mp4';
import videoPath4 from '../../../videos/capitulo4.mp4';
import videoPath5 from '../../../videos/capitulo5.mp4';
import './Video.css'

const sonidoPath = `${process.env.PUBLIC_URL}/audiohover.mp3`;
const Video = () => {
  const [videoUrl, setVideoUrl] = useState(intropath);
  const [showImages, setShowImages] = useState(true);
  const chapters = [
    { name: 'Pop 31 de marzo', url: videoPath1, image: './cap1.png'},
    { name: 'Construcción de barriosI', url: videoPath2, image: './cap2.png' },
    { name: 'Líderes sociales II', url: videoPath3, image: './cap3.png' },
    { name: 'Construcción de barriosI', url: videoPath4, image: './cap4.png' },
    { name: 'Mujeres lucha y esperanza', url: videoPath5, image: './cap5.png' },
    { name: 'logo centro', url:videoPath1 , image: './Logo200px.png' },
    { name: 'Intro', style: {display: 'none', top: '0px', left: '0px'} },
  ];

  const audioRef = useRef(null);

  const handleChapterClick = (chapterUrl) => {
    setShowImages(false);
    setVideoUrl(chapterUrl);
  };

  const handleVideoEnded = () => {
    setShowImages(true);
  }
  
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        controls
        playing
        url={videoUrl}
        width="100%"
        height="-1%"
        onEnded={handleVideoEnded}
      />
      <div className="chapter-buttons">
        {showImages && chapters.map((chapter) => (
          <img
            className="chapter-button"
            key={chapter.name}
            src={chapter.image}
            alt={chapter.name}
            style={chapter.style}
            onClick={() => handleChapterClick(chapter.url)}
            onMouseEnter={() => audioRef.current.play()}
            onMouseLeave={() => audioRef.current.pause()}
          />
        ))}
      </div>
      <audio ref={audioRef} src={sonidoPath} />
    </div>
  );
};

export { Video };
