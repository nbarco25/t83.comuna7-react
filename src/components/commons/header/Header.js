import React from 'react'
import './Header.css';


const Header = () => {
    return (
        <nav>
            <a className='logo' href="/">
                <img src='./Logo200px.png' alt='logo'/>
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
