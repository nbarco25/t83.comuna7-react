import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <ul
      className={`menu ${showDropdown ? 'open' : ''}`}
    >
      <li><a href="/">Inicio</a></li>
      <li><a href="/">Episodios</a></li>
      <li className={`dropdown ${showDropdown ? 'open' : ''}`}>
        <a
          href="/"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          Extensiones
        </a>
        {/* Menú desplegable */}
        <ul>
          <li><a href="/">Podcast</a></li>
          <li><a href="/">Fotografía</a></li>
          <li><a href="/">Pinturas</a></li>
        </ul>
      </li>
      <li><a href="/">Créditos</a></li>
    </ul>
  );
};

export { Menu };
