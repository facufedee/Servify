// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/hero';
import Tarjetas from './components/Tarjetas';
import Trabajos from './components/Trabajos';

function App() {
  return (
    <div className="servify-main">
      <Header />
      <Hero />
      <Tarjetas />
      <Trabajos />
    </div>
  );
}

export default App;
