import React from 'react';
import '../styles/header.css'
import '../styles/nav.css'

const Header = () => {
  return (
    <header className="servify-header">
        <h1>SERVIFY</h1>
        <nav className="servify-nav">
      <ul>
        <li>
          <a href="#">Servify Pro</a>
        </li>
        <li>
          <a href="#">Explorar</a>
        </li>
        <li>
          <a href="#">Ofrecer Servicios</a>
        </li>
        <li>
          <a href="#">Registrarse</a>
        </li>
        <li>
          <button className="join-button">Ingresar</button>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;