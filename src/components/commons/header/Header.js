import React from 'react'
import './Header.css';
import { Social } from '../social/Social.js';
import { Menu } from '../menu/Menu';

const Header = () => {
    return (
        <nav>
            <a className='logo' href="/">
                <img src='./Logo200px.png' alt='logo'/>
            </a>
            <div className="navbar-center">
               <Menu/>
            </div>
            <div className="navbar-right">
                <Social/>
            </div>
        </nav>
        
 
    )
}

export { Header };
