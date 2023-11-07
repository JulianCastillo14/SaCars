import React from 'react';
import '../styles/Vehiculo.css'

const Vehiculo = ({ imagen, modelo, descripcion, anio, color, precio }) => {
    return (
        <div className='vehiculo'>
            <figure className='container-img-vehiculo'>
                <img src={imagen} alt={descripcion} />
            </figure>
            <div className='vehiculo-info'>
                <h2>{modelo}</h2>
                <p>Descripción: {descripcion}</p>
                <p>Año de fabricación: {anio}</p>
                <p>Color: {color}</p>
                <p id='precio'>Precio: ${precio}</p>
                <button>Más información</button>
            </div>
        </div>
    );
};

export default Vehiculo;
