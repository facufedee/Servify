// Tarjetas.js
import React from 'react';
import Tarjeta from './Tarjeta';
import servicios from '../services/servicios.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false, // Desactivar los puntos de navegación
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false, // Desactivar los puntos de navegación en pantallas medianas
        arrows: true // Mostrar flechas en pantallas medianas
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: false, // Desactivar los puntos de navegación en pantallas pequeñas
        arrows: true // Mostrar flechas en pantallas pequeñas
      }
    }
  ]
};


const Tarjetas = ({ title, image, description }) => {
  return (
    <div className="tarjetas">
    <h1>Nuestros Servicios</h1>
    <Slider {...settings}>
      {servicios.map((service, index) => (
        <div key={index}>
          <Tarjeta {...service} />
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default Tarjetas;
