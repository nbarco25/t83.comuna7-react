import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import videoPath1 from '../../../../src/capitulo1.mp4';
import videoPath2 from '../../../../src/capitulo2.mp4';

const Video = () => {
  const [videoUrl, setVideoUrl] = useState(videoPath1);
  const chapters = [
    { name: 'Capítulo 1', url: videoPath1 },
    { name: 'Capítulo 2', url: videoPath2 },
  ];

  const handleChapterClick = (chapterUrl) => {
    setVideoUrl(chapterUrl);
  };

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        controls
        url={videoUrl}
        width="100%"
        height="90%"
      />
      <div className="chapter-buttons">
        {chapters.map((chapter) => (
          <button key={chapter.name} onClick={() => handleChapterClick(chapter.url)}>
            {chapter.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export { Video };
