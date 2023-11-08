import React from 'react'
import Vehiculo from '../components/Vehiculo.jsx'
import '../styles/Catalogo.css'

import Auto6 from '../assets/images/Automoviles/fiesta-ford.png';
import Auto7 from '../assets/images/Automoviles/focus-ford.png';
import Auto8 from '../assets/images/Automoviles/mundeo-ford.png';
import camioneta10 from '../assets/images/Camionetas/EcoBoost-ford.png';
import camioneta11 from '../assets/images/Camionetas/Explorer-ford.png';
import camioneta12 from '../assets/images/Camionetas/Performance-ford.png';
import PickUps4 from '../assets/images/PickUps/Ranger-ford.png';
import PickUps5 from '../assets/images/PickUps/Ranger-Raptor-ford.png';
import vans3 from '../assets/images/Vans/Transit-Ford.png';
import vans4 from '../assets/images/Vans/E-Series.png';
import vans16 from '../assets/images/Vans/Chrysler-Pacífic-Ford.png';


const Ford = () => {
  return (
    <div id='container-catalogo'>
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
            imagen= {camioneta10}
            modelo='EcoBoost'
            descripcion='Nueva Ford Escape EcoBoost' 
            anio='2020' 
            color='Azul'
            precio='179.990.000'
        />
        <Vehiculo 
            imagen= {camioneta11}
            modelo='Explorer'
            descripcion='FORD EXPLORER XLT' 
            anio='2014' 
            color='Gris'
            precio='228.990.000'
        />
        <Vehiculo 
            imagen= {camioneta12}
            modelo='Expedition'
            descripcion='Nueva Ford Expedition Stealth 4x4' 
            anio='2023' 
            color='Negro'
            precio='339.990.000'
        />
        <Vehiculo 
            imagen= {PickUps4}
            modelo='Ranger'
            descripcion='Nueva Generación Ranger' 
            anio='2023' 
            color='Naranja'
            precio='179.990.000'
        />
        <Vehiculo 
            imagen= {PickUps5}
            modelo='Ranger Raptor'
            descripcion='Ford Ranger Raptor' 
            anio='2024' 
            color='Azul'
            precio='362.990.000'
        />
        <Vehiculo 
            imagen= {vans3}
            modelo='Pasajeros XL'
            descripcion='Ford TRANSIT PASAJEROS XL' 
            anio='2019' 
            color='Blanco'
            precio='432.000.000'
        />
        <Vehiculo 
            imagen= {vans4}
            modelo='E-Series'
            descripcion='Ford E-Series ' 
            anio='2023' 
            color='Azul'
            precio='179.990.000'
        />
        <Vehiculo 
            imagen= {vans16}
            modelo='Chrysler Pacífica'
            descripcion='Ford Chrysler Pacífica' 
            anio='2019' 
            color='Gris'
            precio='62.000.000'
        />
    </div>

  )
}

export default Ford