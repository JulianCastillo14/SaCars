import React from 'react'
import Vehiculo from '../components/Vehiculo.jsx'
import vans1 from '../assets/images/Vans/Cargo-chevrolet.png';
import vans2 from '../assets/images/Vans/Pasajeros-chevrolet.png';
import vans3 from '../assets/images/Vans/Transit-Ford.png';
import vans4 from '../assets/images/Vans/E-Series.png';
import vans5 from '../assets/images/Vans/Ford-Windstar.png';
import vans6 from '../assets/images/Vans/TOWNSTAR-Nissan.png';
import vans7 from '../assets/images/Vans/PRIMASTAR-Nissan.png';
import vans8 from '../assets/images/Vans/INTERSTAR-Nissan.png';
import vans9 from '../assets/images/Vans/Nissan-Urvan.png';
import vans10 from '../assets/images/Vans/Chevrolet-N400.png';
import vans11 from '../assets/images/Vans/Changan-Van-Nissan.png';
import vans12 from '../assets/images/Vans/DFSK-K05S-Nissan.png';
import vans13 from '../assets/images/Vans/Transit-Ford.png';
import vans14 from '../assets/images/Vans/Nissan-Urvan.png';
import vans15 from '../assets/images/Vans/BYD-T3-Chevrolet.png';
import vans16 from '../assets/images/Vans/Chrysler-Pacífic-Ford.png';
import vans17 from '../assets/images/Vans/DFSK-K05S-Nissan.png';
import vans18 from '../assets/images/Vans/BYD-T3-Chevrolet.png';

import '../styles/Catalogo.css'

const vans = () => {
  return (
    <div id='container-catalogo'>
      <Vehiculo 
            imagen= {vans1}
            modelo=' N400 Cargo'
            descripcion='Chevrolet N400 Cargo 2023  ' 
            anio='2023' 
            color='Blanco'
            precio='83.620.000'
        />
        <Vehiculo 
            imagen= {vans2}
            modelo='Pasajeros'
            descripcion='Chevrolet N400 PASAJEROS 2023' 
            anio='2023' 
            color='Gris'
            precio='85.620.000'
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
            imagen= {vans5}
            modelo='TOWNSTAR'
            descripcion='La Nueva Nissan TOWNSTAR' 
            anio='1999' 
            color='Verde'
            precio='362.990.000'
        />
        <Vehiculo 
            imagen= {vans6}
            modelo='F-150 '
            descripcion='F-150 HÍBRIDA ' 
            anio='2022' 
            color='Marron'
            precio='360.990.000'
        />
        <Vehiculo 
            imagen= {vans7}
            modelo='PRIMASTAR'
            descripcion='La Nissan PRIMASTAR' 
            anio='2023' 
            color='Blanca'
            precio='520.990.000'
        />
        <Vehiculo 
            imagen= {vans8}
            modelo='INTERSTAR'
            descripcion='La Nissan INTERSTAR' 
            anio='2017' 
            color='Azul'
            precio='94.990.000'
        />
        <Vehiculo 
            imagen= {vans9}
            modelo='Urvan'
            descripcion='La Nissan Urvan' 
            anio='1999' 
            color='Blanca'
            precio='62.000.000'
        />
        <Vehiculo 
            imagen= {vans10}
            modelo='N400'
            descripcion='Chevrolet N400 2.5 High Lujo' 
            anio='2019' 
            color='Gris'
            precio='22.000.000'
        />
        <Vehiculo 
            imagen= {vans11}
            modelo='Changan Van'
            descripcion='Nissan Changan Van 2.5 Xe' 
            anio='2019' 
            color='Gris'
            precio='69.990.000'
        />
        <Vehiculo 
            imagen= {vans12}
            modelo='DFSK K05S '
            descripcion='Nissan DFSK K05S ' 
            anio='2016' 
            color='Blanca'
            precio='39.990.000'
        />
          <Vehiculo 
            imagen= {vans13}
            modelo='Pasajeros XL'
            descripcion='Ford TRANSIT VAN ' 
            anio='2023' 
            color='Blanco'
            precio='432.000.000'
        />
            <Vehiculo 
            imagen= {vans14}
            modelo='Urvan'
            descripcion='La Nissan Urvan' 
            anio='1999' 
            color='Blanco'
            precio='62.000.000'
        />
        
        <Vehiculo 
            imagen= {vans15}
            modelo='BYD T3'
            descripcion='BYD T3 es una van eléctrica' 
            anio='2020' 
            color='Blanco'
            precio='62.000.000'
        />
        <Vehiculo 
            imagen= {vans16}
            modelo='Chrysler Pacífica'
            descripcion='Ford Chrysler Pacífica' 
            anio='2019' 
            color='Gris'
            precio='62.000.000'
        />
        <Vehiculo 
            imagen= {vans17}
            modelo='DFSK K05S '
            descripcion='Nissan DFSK K05S ' 
            anio='2016' 
            color='Blanca'
            precio='39.990.000'
        />
        <Vehiculo 
            imagen= {vans18}
            modelo='BYD T3'
            descripcion='BYD T3 es una van eléctrica' 
            anio='2020' 
            color='Blanco'
            precio='62.000.000'
        />
       
    </div>

    
  )
}

export default vans