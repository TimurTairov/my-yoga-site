import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../styles/slider2.css';

function Slider({ slides }) {

  return (
    <Carousel
      nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed" />}
    >
      {slides.map((slide) => (
        <Carousel.Item key={slide.image} >
          <img
            className="d-block w-100"
            src={slide.image}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;