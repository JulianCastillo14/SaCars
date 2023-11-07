import React from 'react'
import Vehiculo from '../components/Vehiculo.jsx'
import Auto1 from '../assets/images/Automoviles/aveo-chevrolet.png';
import Auto2 from '../assets/images/Automoviles/cruce-chevrolet.png';
import Auto3 from '../assets/images/Automoviles/onix-chevrolet.png';
import Auto4 from '../assets/images/Automoviles/aveoGT-chevrolet.png';
import Auto5 from '../assets/images/Automoviles/optra-chevrolet.png';
import Auto6 from '../assets/images/Automoviles/fiesta-ford.png';
import Auto7 from '../assets/images/Automoviles/focus-ford.png';
import Auto8 from '../assets/images/Automoviles/mundeo-ford.png';

import '../styles/Automoviles.css'

const Automoviles = () => {
  return (
    <div id='container-automoviles'>
      <Vehiculo 
            imagen= {Auto1}
            modelo='Aveo'
            descripcion='Chevrolet Aveo 1.6 Sd' 
            anio='2008' 
            color='Gris'
            precio='19.500.000'
        />
        <Vehiculo 
            imagen= {Auto2}
            modelo='Cruze'
            descripcion='Chevrolet Cruze 1.4 Ltz 4 p' 
            anio='2017' 
            color='Rojo'
            precio='57.900.000'
        />
        <Vehiculo 
            imagen= {Auto3}
            modelo='Onix'
            descripcion='Chevrolet Onix Lt 1.0 Turbo Mecgit ' 
            anio='2021' 
            color='Azul Metálico'
            precio='57.999.000'
        />
        <Vehiculo 
            imagen= {Auto4}
            modelo='Aveo Amotion Five Gt'
            descripcion='Chevrolet Aveo Amotion Five Gt' 
            anio='2013' 
            color='Negro'
            precio='28.500.000'
        />
        <Vehiculo 
            imagen= {Auto5}
            modelo='Optra'
            descripcion='Chevrolet Optra Lt 1.0' 
            anio='2010' 
            color='Gris'
            precio='17.000.000'
        />
        <Vehiculo 
            imagen= {Auto6}
            modelo='Fiesta'
            descripcion='Ford Fiesta Se 1.6 Mec' 
            anio='2018' 
            color='Blanco'
            precio='45.490.000'
        />
        <Vehiculo 
            imagen= {Auto7}
            modelo='Focus'
            descripcion='Ford Focus 2.0 Se' 
            anio='2018' 
            color='Blanco'
            precio='39.700.000'
        />
        <Vehiculo 
            imagen= {Auto8}
            modelo='Mundeo'
            descripcion='Ford Mundeo' 
            anio='2017' 
            color='Marrón'
            precio='125.900.000'
        />
    </div>
  )
}

export default Automoviles