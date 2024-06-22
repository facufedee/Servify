import React from 'react';
import '../styles/hero.css'

const Hero = () => {
  return (
<main className="servify-main">
      <section className="servify-hero">
        <div className="servify-hero-image">
          <div className="servify-hero-text">
            <h2>El servicio freelance que necesitas al alcance de tu mano</h2>
          </div>
          <div className="servify-hero-search">
            <input type="text" placeholder="Encuentra un especialista..." />
            <button className="search-button">
              <span className="material-icons">Buscar</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;