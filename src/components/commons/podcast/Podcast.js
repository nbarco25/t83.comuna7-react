import React from 'react';
import './Podcast.css';

const Podcast = () => {
    // Podrías reemplazar este array con la información de tus podcasts
    const podcasts = [
        {
            title: 'Capítulo 1',
            url: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1593625207&color=%23d2a944&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        // Agrega más objetos de podcasts aquí
    ];

    return (
        <div className="podcast-container">
            <h1>Podcast T83Comuna7</h1>
            {podcasts.map((podcast, index) => (
                <div className="podcast-chapter" key={index}>
                    <h2>{podcast.title}</h2>
                    <div className="soundcloud-embed">
                        <iframe 
                            title={podcast.title}
                            width="100%" 
                            height="300" 
                            scrolling="no" 
                            frameborder="no" 
                            allow="autoplay" 
                            src={podcast.url}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Podcast;
