// Tarjeta.js
import React from 'react';
import '../styles/tarjetas.css'; // Asegúrate de que el import sea minúsculo para 'tarjetas.css'

const Tarjeta = ({ title, image, description }) => {
  return (
    <div className="tarjeta"> {/* clase 'tarjeta' en minúscula */}
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default Tarjeta;
