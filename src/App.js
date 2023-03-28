import React from 'react'
import './App.css';
import { Header } from './components/commons/header/Header.js';
import { Menu } from './components/commons/menu/Menu.js';
import { Video } from './components/commons/video/Video.js';


function App() {
  return (

    <div>
      <Header>
        <Menu></Menu>
      </Header>
      <Video/>
    </div>
  );
}

export default App;
