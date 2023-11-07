import React from 'react'
import Vehiculo from '../components/Vehiculo.jsx'
import Auto1 from '../assets/images/Automoviles/aveo-chevrolet.png';
import Auto2 from '../assets/images/Automoviles/cruce-chevrolet.png';
import Auto3 from '../assets/images/Automoviles/onix-chevrolet.png';
import Auto4 from '../assets/images/Automoviles/aveoGT-chevrolet.png';
import Auto5 from '../assets/images/Automoviles/optra-chevrolet.png';

import '../styles/Automoviles.css'

const Automoviles = () => {
  return (
    <div id='container-automoviles'>
      <div className='autos'>
      <Vehiculo 
            imagen= {Auto1}
            descripcion='Aveo 1.6 Sd'
            modelo='Chevrolet Aveo 1.6 Sd' 
            anio='2008' 
            color='Gris'
            precio='19.500.000'
        />
        <Vehiculo 
            imagen= {Auto2}
            descripcion='Cruze 1.4 Ltz 4 p'
            modelo='Chevrolet Cruze 1.4 Ltz 4 p' 
            anio='2017' 
            color='Rojo'
            precio='57.900.000'
        />
        <Vehiculo 
            imagen= {Auto3}
            descripcion='Onix Lt 1.0'
            modelo='Chevrolet Onix Lt 1.0 Turbo Mec Sedan' 
            anio='2021' 
            color='Azul Metálico'
            precio='57.999.000'
        />
      </div>
      <div className='autos'>
        <Vehiculo 
              imagen= {Auto4}
              descripcion='Aveo Amotion Five Gt'
              modelo='Chevrolet Aveo Amotion Five Gt' 
              anio='2013' 
              color='Negro'
              precio='28.500.000'
        />
        <Vehiculo 
            imagen= {Auto5}
            descripcion='Optra Lt 1.0'
            modelo='Chevrolet Optra Lt 1.0' 
            anio='2010' 
            color='Gris'
            precio='17.000.000'
        />
      </div>
    </div>
  )
}

export default Automoviles