import React from 'react'
import Vehiculo from '../components/Vehiculo.jsx'
import '../styles/Catalogo.css'
import Auto17 from '../assets/images/Automoviles/I5-bmw.png';
import Auto18 from '../assets/images/Automoviles/4-series-bmw.png';
import Auto19 from '../assets/images/Automoviles/gran-coupe-bmw.png';
import Auto20 from '../assets/images/Automoviles/serie3-bmw.png';
import camioneta6 from '../assets/images/Camionetas/X5-BMW.png';
import camioneta7 from '../assets/images/Camionetas/x6-chevrolet.png';
import camioneta8 from '../assets/images/Camionetas/x3-chevrolet.png';
import camioneta9 from '../assets/images/Camionetas/X7-chevrolet.png';

const BMW = () => {
  return (
    <div id='container-catalogo'>
        <Vehiculo 
            imagen= {Auto17}
            modelo='BMW i5'
            descripcion='BMW i5 eléctrico' 
            anio='2023' 
            color='Gris oscuro'
            precio='320.000.000'
        />
        <Vehiculo 
            imagen= {Auto18}
            modelo='BMW Cabrio'
            descripcion='BMW Serie 4 Cabrio 2024' 
            anio='2024' 
            color='Gris oscurol'
            precio='279.900.000'
        />
        <Vehiculo 
            imagen= {Auto19}
            modelo='BMW Gran Coupé'
            descripcion='BMW Serie 4 Gran Coupé 2024' 
            anio='2024' 
            color='Naranja'
            precio='229.900.000'
        />
        <Vehiculo 
            imagen= {Auto20}
            modelo='BMW M3'
            descripcion='BMW M3 Competition' 
            anio='2023' 
            color='Azul'
            precio='679.900.000'
        />
        <Vehiculo 
            imagen= {camioneta6}
            modelo='X5 '
            descripcion='BMW X5 3.0 Xdrive45E Hibrido' 
            anio='2018' 
            color='Negro'
            precio='350.000.000'
        />
        <Vehiculo 
            imagen= {camioneta7}
            modelo='x6'
            descripcion='BMW X6 M COMPETITION ' 
            anio='2018' 
            color='Verde'
            precio='49.700.000'
        />
        <Vehiculo 
            imagen= {camioneta8}
            modelo='x3'
            descripcion='BMW X3 M Competition' 
            anio='2017' 
            color='Blanco'
            precio='125.900.000'
        />
        <Vehiculo 
            imagen= {camioneta9}
            modelo='X7'
            descripcion='BMW X7 M50i' 
            anio='2022' 
            color='Negro'
            precio='75.500.000'
        />
    </div>
  )
}

export default BMW