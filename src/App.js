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
      <div className="navbar-left-social">
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
            </div>
    </React.Fragment>
  );
}

export default App;
