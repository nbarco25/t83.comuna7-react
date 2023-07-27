import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Header } from './components/commons/header/Header.js';
import { Video } from './components/commons/video/Video.js';


function App() {
  return (
    <Router> {}
      <Header/>
      <Video/>
    </Router>
  );
}
 
export default App;
