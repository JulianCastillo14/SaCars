import React from 'react'
import Vehiculo from '../components/Vehiculo.jsx'
import Layout from '../components/Layaut.jsx'
import '../styles/Catalogo.css'
import Auto13 from '../assets/images/Automoviles/sentra-nissan.png';
import Auto14 from '../assets/images/Automoviles/versa-nissan.png';
import Auto15 from '../assets/images/Automoviles/v-drive-nissan.png';
import Auto16 from '../assets/images/Automoviles/march-nissan.png';
import camioneta13 from '../assets/images/Camionetas/KICKS-ford.png';
import camioneta14 from '../assets/images/Camionetas/QASHQAI-NISSAN.png';
import PickUps8 from '../assets/images/PickUps/Frontier-Nissan.png';
import PickUps9 from '../assets/images/PickUps/Np-300-Toyota.png';
import PickUps10 from '../assets/images/PickUps/Navara-Nissan.png';
import PickUps11 from '../assets/images/PickUps/Xe-Nissan.png';
import vans6 from '../assets/images/Vans/TOWNSTAR-Nissan.png';
import vans7 from '../assets/images/Vans/PRIMASTAR-Nissan.png';
import vans8 from '../assets/images/Vans/INTERSTAR-Nissan.png';
import vans9 from '../assets/images/Vans/Nissan-Urvan.png';

const Nissan = () => {
  return (
    <Layout>
        <div id='container-catalogo'>
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
                imagen= {camioneta13}
                modelo='KICKS'
                descripcion='KICKS NISSAN' 
                anio='2022' 
                color='Azul'
                precio='89.990.000'
            />
            <Vehiculo 
                imagen= {camioneta14}
                modelo='QASHQAI'
                descripcion='Nissan QASHQAI' 
                anio='2023' 
                color='Azul'
                precio='107.990.000'
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
        </div>
    </Layout>
  )
}

export default Nissan