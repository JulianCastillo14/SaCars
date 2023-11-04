import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Carrusel.css'

export const Carrucel = ({ imagenes }) => {
  return (
    <Carousel id='carrusel'>
      {imagenes.map((imagen, indice) => (
        <Carousel.Item key={indice}>
          <img
            className="d-block w-100"
            src={imagen}
            alt={`Auto ${indice + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}


export default Carrucel
