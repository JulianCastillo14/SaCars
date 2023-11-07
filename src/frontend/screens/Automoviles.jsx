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
import Auto9 from '../assets/images/Automoviles/yarisxs-toyota.png';
import Auto10 from '../assets/images/Automoviles/corolla-toyota.png';
import Auto11 from '../assets/images/Automoviles/camry-toyoya.png';
import Auto12 from '../assets/images/Automoviles/prius-toyota.png';
import Auto13 from '../assets/images/Automoviles/sentra-nissan.png';
import Auto14 from '../assets/images/Automoviles/versa-nissan.png';
import Auto15 from '../assets/images/Automoviles/v-drive-nissan.png';
import Auto16 from '../assets/images/Automoviles/march-nissan.png';
import Auto17 from '../assets/images/Automoviles/I5-bmw.png';
import Auto18 from '../assets/images/Automoviles/4-series-bmw.png';
import Auto19 from '../assets/images/Automoviles/gran-coupe-bmw.png';
import Auto20 from '../assets/images/Automoviles/serie3-bmw.png';
import '../styles/Catalogo.css'

const Automoviles = () => {
  return (
    <div id='container-catalogo'>
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
            color='Dorado'
            precio='125.900.000'
        />
        <Vehiculo 
            imagen= {Auto9}
            modelo='Yaris XS'
            descripcion='Toyota Yaris 1.5 Xs Tp' 
            anio='2022' 
            color='Gris'
            precio='75.500.000'
        />
        <Vehiculo 
            imagen= {Auto10}
            modelo='Corolla'
            descripcion='Toyota Corolla 1.8 Se-g Hybrid' 
            anio='2020' 
            color='Rojo'
            precio='105.000.000'
        />
        <Vehiculo 
            imagen= {Auto11}
            modelo='Camry'
            descripcion='Toyota Camry V6 3.5l' 
            anio='2014' 
            color='Marrón'
            precio='98.500.000'
        />
        <Vehiculo 
            imagen= {Auto12}
            modelo='Prius'
            descripcion='Toyota Prius' 
            anio='2010' 
            color='Blanco'
            precio='35.000.000'
        />
        <Vehiculo 
            imagen= {Auto13}
            modelo='Sentra'
            descripcion='Nissan Sentra 1.8 B17 Fl' 
            anio='2017' 
            color='Azul'
            precio='57.000.000'
        />
        <Vehiculo 
            imagen= {Auto14}
            modelo='Versa'
            descripcion='Nissan Versa 1.6 Sense' 
            anio='2019' 
            color='Negro'
            precio='51.300.000'
        />
        <Vehiculo 
            imagen= {Auto15}
            modelo='V-drive'
            descripcion='Nissan V-drive Auto' 
            anio='2024' 
            color='Rojo'
            precio='72.990.000'
        />
        <Vehiculo 
            imagen= {Auto16}
            modelo='March'
            descripcion='Nissan March 1.6 Advance' 
            anio='2016' 
            color='Azul'
            precio='38.200.000'
        />
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
    </div>
  )
}

export default Automoviles