import React from 'react'
import Vehiculo from '../components/Vehiculo.jsx'
import Layout from '../components/Layaut.jsx'
import '../styles/Catalogo.css'
import camioneta1 from '../assets/images/Camionetas/Tra-Chevrolet.png';
import camioneta2 from '../assets/images/Camionetas/Tracker-Turbo-RS-Chevrolet.png';
import camioneta3 from '../assets/images/Camionetas/Captiva-Chevrolet.png';
import camioneta4 from '../assets/images/Camionetas/Tahoe-Chevrolet.png';
import camioneta5 from '../assets/images/Camionetas/Equinox-Chevrolet.png';
import camioneta6 from '../assets/images/Camionetas/X5-BMW.png';
import camioneta7 from '../assets/images/Camionetas/x6-chevrolet.png';
import camioneta8 from '../assets/images/Camionetas/x3-chevrolet.png';
import camioneta9 from '../assets/images/Camionetas/X7-chevrolet.png';
import camioneta10 from '../assets/images/Camionetas/EcoBoost-ford.png';
import camioneta11 from '../assets/images/Camionetas/Explorer-ford.png';
import camioneta12 from '../assets/images/Camionetas/Performance-ford.png';
import camioneta13 from '../assets/images/Camionetas/KICKS-ford.png';
import camioneta14 from '../assets/images/Camionetas/QASHQAI-NISSAN.png';
import camioneta15 from '../assets/images/Camionetas/FORTUNER-Toyota.png';
import camioneta16 from '../assets/images/Camionetas/LAND-TOYOTA.png';
import camioneta17 from '../assets/images/Camionetas/YARIS-Toyota.png';
import camioneta18 from '../assets/images/Camionetas/Prado-Toyota.png';
import camioneta19 from '../assets/images/Camionetas/RAV4-Toyota.png';
import camioneta20 from '../assets/images/Camionetas/COROLLA-Toyota.png';



const Camionetas = () => {
  return (
    <Layout>
        <div id='container-catalogo'>
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
                imagen= {camioneta20}
                modelo='COROLLA CROSS'
                descripcion='Toyota COROLLA CROSS XEI' 
                anio='2024' 
                color='Negro'
                precio='134.500.000'
            />
        </div>
    </Layout>
  )
}

export default Camionetas