import React from 'react'
import './Social.css';
import { Header } from '../header/Header';


const Social = () => {
    return (
        <React.Fragment>

            <div className='contenedor-redes'>
                <a className='instagram' href="https://www.facebook.com/profile.php?id=100089703830438">
                    <img src='./facebook.png' alt='logo'/>
                </a>

                <a className='instagram' href="https://www.instagram.com/t83comuna7/">
                    <img src='./instagram.png' alt='logo'/>
                </a>

                <a className='instagram' href="https://twitter.com/t83comuna7/">
                    <img src='./Twitter.png' alt='logo'/>
                </a>
            </div>
        </React.Fragment>
    )
}

export { Social };