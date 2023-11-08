import React from 'react'
import Vehiculo from '../components/Vehiculo.jsx'
import PickUps1 from '../assets/images/PickUps/HILUX-Toyota.png';
import PickUps2 from '../assets/images/PickUps/CARGOMAX-toyota.png';
import PickUps3 from '../assets/images/PickUps/TUNDRA-toyota.png';
import PickUps4 from '../assets/images/PickUps/Ranger-ford.png';
import PickUps5 from '../assets/images/PickUps/Ranger-Raptor-ford.png';
import PickUps6 from '../assets/images/PickUps/F-150-Toyota.png';
import PickUps7 from '../assets/images/PickUps/F-150-Raptor-Toyota.png';
import PickUps8 from '../assets/images/PickUps/Frontier-Nissan.png';
import PickUps9 from '../assets/images/PickUps/Np-300-Toyota.png';
import PickUps10 from '../assets/images/PickUps/Navara-Nissan.png';
import PickUps11 from '../assets/images/PickUps/Xe-Nissan.png';
import PickUps12 from '../assets/images/PickUps/MONTANA-chevrolet.png';
import PickUps13 from '../assets/images/PickUps/Colorado-chevrolet.png';
import PickUps14 from '../assets/images/PickUps/HILUX-Toyota.png';
import PickUps15 from '../assets/images/PickUps/F-150-Raptor-Toyota.png';

import '../styles/Catalogo.css'

const PickUps = () => {
  return (
    <div id='container-catalogo'>
      <Vehiculo 
            imagen= {PickUps1}
            modelo='HILUX'
            descripcion='HILUX CHASIS 4X2 2.7 MT' 
            anio='2023' 
            color='Blanco'
            precio='123.000.000'
        />
        <Vehiculo 
            imagen= {PickUps2}
            modelo='HILUX CARGOMAX'
            descripcion='Toyota HILUX CARGOMAX' 
            anio='2023' 
            color='Blanco'
            precio=' 137.500.000'
        />
        <Vehiculo 
            imagen= {PickUps3}
            modelo='TUNDRA'
            descripcion='Toyota TUNDRA' 
            anio='2023' 
            color='Azul'
            precio='432.000.000'
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
            imagen= {PickUps6}
            modelo='F-150 '
            descripcion='Toyota F-150 HÍBRIDA ' 
            anio='2022' 
            color='Negro'
            precio='360.990.000'
        />
        <Vehiculo 
            imagen= {PickUps7}
            modelo='F-150 Raptor'
            descripcion='Toyota BUILT FORD TOUGH ' 
            anio='2023' 
            color='Blanca'
            precio='520.990.000'
        />
        <Vehiculo 
            imagen= {PickUps8}
            modelo='Frontier'
            descripcion='Nissan Frontier 2.5 Np300' 
            anio='2017' 
            color='Gris'
            precio='94.990.000'
        />
        <Vehiculo 
            imagen= {PickUps9}
            modelo='Np 300'
            descripcion='Nissan Np 300 Frontier 24l Mt 2.4' 
            anio='2019' 
            color='Blanca'
            precio='62.000.000'
        />
        <Vehiculo 
            imagen= {PickUps10}
            modelo='Navara'
            descripcion='Nissan Navara 2.5 High Lujo' 
            anio='2020' 
            color='Gris'
            precio='102.000.000'
        />
        <Vehiculo 
            imagen= {PickUps11}
            modelo='Xe'
            descripcion='Nissan Frontier 2.5 Xe' 
            anio='2019' 
            color='Gris'
            precio='169.990.000'
        />
        <Vehiculo 
            imagen= {PickUps12}
            modelo='MONTANA'
            descripcion='Chevrolet NUEVA MONTANA' 
            anio='2020' 
            color='Rojo'
            precio='101.420.000 '
        />
        <Vehiculo 
            imagen= {PickUps13}
            modelo='Colorado'
            descripcion='Chevrolet Colorado 2023' 
            anio='2023' 
            color='Gris'
            precio='193.720.000'
        />
        <Vehiculo 
            imagen= {PickUps14}
            modelo='HILUX'
            descripcion='HILUX CHASIS 4X2 GASOLINA 2.7 MT' 
            anio='2023' 
            color='Blanco'
            precio='123.000.000'
        />
         <Vehiculo 
            imagen= {PickUps15}
            modelo='F-150 Raptor'
            descripcion='Toyota BUILT FORD TOUGH ' 
            anio='2023' 
            color='Blanca'
            precio='520.990.000'
        />
        
       
    </div>
  )
}

export default PickUps