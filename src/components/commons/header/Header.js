import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <nav>
            <img src="./icon_menu.svg" alt="menu" className="menu"/>

            <a className='logo' href="/">
                <span>T83 COMUNA 7 POPAYÁN</span>
            </a>
            <div className="navbar-center">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Episodios</a></li>
                    <li><a href="/">Proyectos</a></li>
                    <li><a href="/">Créditos</a></li>
                </ul>
            </div>
            <div className="navbar-left-social">
                
            </div>
        </nav>
 
    )
}

export { Header };
