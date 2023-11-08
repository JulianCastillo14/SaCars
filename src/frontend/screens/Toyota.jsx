import React from 'react'
import Vehiculo from '../components/Vehiculo.jsx'
import '../styles/Catalogo.css'
import Auto9 from '../assets/images/Automoviles/yarisxs-toyota.png';
import Auto10 from '../assets/images/Automoviles/corolla-toyota.png';
import Auto11 from '../assets/images/Automoviles/camry-toyoya.png';
import Auto12 from '../assets/images/Automoviles/prius-toyota.png';
import camioneta15 from '../assets/images/Camionetas/FORTUNER-Toyota.png';
import camioneta16 from '../assets/images/Camionetas/LAND-TOYOTA.png';
import camioneta17 from '../assets/images/Camionetas/YARIS-Toyota.png';
import camioneta18 from '../assets/images/Camionetas/Prado-Toyota.png';
import camioneta19 from '../assets/images/Camionetas/RAV4-Toyota.png';
import PickUps1 from '../assets/images/PickUps/HILUX-Toyota.png';
import PickUps2 from '../assets/images/PickUps/CARGOMAX-toyota.png';
import PickUps3 from '../assets/images/PickUps/TUNDRA-toyota.png';

const Toyota = () => {
  return (
    <div id='container-catalogo' >
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
            imagen= {camioneta15}
            modelo='FORTUNER'
            descripcion='Toyota EDITION' 
            anio='2023' 
            color='Blanco'
            precio='241.900.000'
        />
           <Vehiculo 
            imagen= {camioneta16}
            modelo='PRADO'
            descripcion='PRADO TXL 4X4 GASOLINA AT' 
            anio='2024' 
            color='Blanco'
            precio='319.000.000'
        /> 
        <Vehiculo
            imagen= {camioneta17}
            modelo='LAND CRUISER'
            descripcion='TOYOTA 4X4 MT' 
            anio='2024' 
            color='Blanco'
            precio='241.900.000'
        />
        <Vehiculo 
            imagen= {camioneta18}
            modelo='YARIS CROSS'
            descripcion='Toyota YARIS CROSS XS HIBRIDO' 
            anio='2024' 
            color='Doris'
            precio='127.900.000'
        />
           <Vehiculo 
            imagen= {camioneta19}
            modelo='RAV4'
            descripcion='Toyota RAV4 4X4 2.5 X-ROAD' 
            anio='2023' 
            color='Azul'
            precio='209,000,000'
        />
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
    </div>
    
  )
}

export default Toyota