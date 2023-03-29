import React from 'react'
import './App.css';
import { ReactDOM } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/commons/header/Header.js';
import { Intro } from './components/commons/intro/Intro';
import { Menu } from './components/commons/menu/Menu.js';
import { Video } from './components/commons/video/Video.js';


function App() {
  return (
    <Router>
    <div>
      <Header>
        <Menu></Menu>
      </Header>
      <Video/>
    </div>
    </Router>
  );
}

export default App;
