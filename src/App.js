import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter
import { Header } from './components/commons/header/Header.js';
import { Intro } from './components/commons/intro/Intro';
import { Menu } from './components/commons/menu/Menu.js';
import { Video } from './components/commons/video/Video.js';


function App() {
  return (
    <Router> {/* Envuelve tu aplicación con el componente Router */}
      <Header/>
      <Video/>
    </Router>
  );
}

export default App;
