import React from 'react'
import Vehiculo from '../components/Vehiculo.jsx'
import Layout from '../components/Layaut.jsx'
import '../styles/Catalogo.css'
import Auto1 from '../assets/images/Automoviles/aveo-chevrolet.png';
import Auto2 from '../assets/images/Automoviles/cruce-chevrolet.png';
import Auto3 from '../assets/images/Automoviles/onix-chevrolet.png';
import Auto4 from '../assets/images/Automoviles/aveoGT-chevrolet.png';
import Auto5 from '../assets/images/Automoviles/optra-chevrolet.png';
import camioneta1 from '../assets/images/Camionetas/Tra-Chevrolet.png';
import camioneta2 from '../assets/images/Camionetas/Tracker-Turbo-RS-Chevrolet.png';
import camioneta3 from '../assets/images/Camionetas/Captiva-Chevrolet.png';
import camioneta4 from '../assets/images/Camionetas/Tahoe-Chevrolet.png';
import camioneta5 from '../assets/images/Camionetas/Equinox-Chevrolet.png';
import PickUps12 from '../assets/images/PickUps/MONTANA-chevrolet.png';
import PickUps13 from '../assets/images/PickUps/Colorado-chevrolet.png';
import vans1 from '../assets/images/Vans/Cargo-chevrolet.png';
import vans2 from '../assets/images/Vans/Pasajeros-chevrolet.png';
import vans10 from '../assets/images/Vans/Chevrolet-N400.png';

const Chevrolet = () => {
  return (
    <Layout>
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
                imagen= {camioneta1}
                modelo='Tracker Turbo '
                descripcion='Chevrolet Tracker Turbo' 
                anio='2022' 
                color='Gris'
                precio='96.990.000'
            />
            <Vehiculo 
                imagen= {camioneta2}
                modelo='Tracker Turbo RS'
                descripcion='Chevrolet Tracker Turbo RS' 
                anio='2024' 
                color='Negro'
                precio='120.620.000'
            />
            <Vehiculo 
                imagen= {camioneta3}
                modelo='Captiva'
                descripcion='Chevrolet Captiva Turbo LTZ' 
                anio='2021' 
                color='Rojo'
                precio='124.990.000'
            />
            <Vehiculo 
                imagen= {camioneta4}
                modelo='Tahoe'
                descripcion='Chevrolet Tahoe 4x4' 
                anio='2013' 
                color='Azul'
                precio='362.990.000'
            />
            <Vehiculo 
                imagen= {camioneta5}
                modelo='Equinox RS'
                descripcion='Chevrolet Equinox RS' 
                anio='2010' 
                color='Blanco'
                precio='17.000.000'
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
                imagen= {vans10}
                modelo='N400'
                descripcion='Chevrolet N400 2.5 High Lujo' 
                anio='2019' 
                color='Gris'
                precio='22.000.000'
            />
        </div>
    </Layout>
  )
}

export default Chevrolet