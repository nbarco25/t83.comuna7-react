import React, { useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';


const Menu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMenuMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <ul className={`menu ${showDropdown ? 'open' : ''}`} onMouseLeave={handleMenuMouseLeave}>
      <li><a href="/">Inicio</a></li>
      <li><a href="/">Episodios</a></li>
      <li
        className={`dropdown ${showDropdown ? 'open' : ''}`}
        onMouseEnter={handleDropdownMouseEnter}
      >
        <a href="/">Extensiones</a>
        {/* Menú desplegable */}
        <ul id="dropdown-menu">
          <li><Link to="/podcast">Podcast</Link></li>
          <li><Link to="/fotografia">Fotografia</Link></li>
          <li><Link to="/pintura">Pintura</Link></li>
        </ul>
      </li>
      <li><a href="/">Créditos</a></li>
    </ul>
  );
};

export { Menu };
