import React, { useState } from 'react';
import '../styles/Vehiculo.css'
import MasInformacion from './MasInformacion';

const Vehiculo = ({ imagen, modelo, descripcion, anio, color, precio }) => {
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const handleMoreInfoClick = () => {
        setShowMoreInfo(true);
    };

    const handleClose = () => {
        setShowMoreInfo(false);
    };

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
                <button onClick={handleMoreInfoClick}>Más información</button>
            </div>
            {showMoreInfo && <MasInformacion onClose={handleClose} />}
        </div>
    );
};

export default Vehiculo;

