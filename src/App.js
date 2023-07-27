import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Header } from './components/commons/header/Header.js';
import { Video } from './components/commons/video/Video.js'; // changed line
import Podcast from './components/commons/podcast/Podcast.js';
import Fotografia from './components/commons/fotografia/Fotografia.js';
import Pintura from './components/commons/pintura/Pintura.js';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/fotografia" element={<Fotografia />} />
        <Route path="/pintura" element={<Pintura />} />
        <Route path="/" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
