import React from 'react'
import './App.css';
import { Header } from './components/commons/header/Header.js';
import { Intro } from './components/commons/intro/Intro';
import { Menu } from './components/commons/menu/Menu.js';
import { Video } from './components/commons/video/Video.js';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Video/>
    </React.Fragment>
  );
}

export default App;
