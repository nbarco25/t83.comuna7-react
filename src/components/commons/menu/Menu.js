import React, { useState } from 'react';
import './Menu.css';

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
