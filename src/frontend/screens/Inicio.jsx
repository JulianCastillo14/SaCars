import Carrusel from '../components/Carrusel.jsx'
import Marcas from '../components/Marcas.jsx'
import Vehiculo from '../components/Vehiculo.jsx'
import Layout from '../components/Layaut.jsx'
import React from 'react'
import imagen1 from '../assets/images/Inicio/joy-sedan-azul-neptuno.jpg'
import imagen2 from '../assets/images/Inicio/tracker-turbo.png';
import imagen3 from '../assets/images/Inicio/colorado.png';
import imagen4 from '../assets/images/Inicio/N400.jpg';
import Auto13 from '../assets/images/Automoviles/sentra-nissan.png';
import Auto7 from '../assets/images/Automoviles/focus-ford.png';
import Auto9 from '../assets/images/Automoviles/yarisxs-toyota.png';
import camioneta15 from '../assets/images/Camionetas/FORTUNER-Toyota.png';
import camioneta2 from '../assets/images/Camionetas/Tracker-Turbo-RS-Chevrolet.png';
import vans14 from '../assets/images/Vans/Nissan-Urvan.png';
import '../styles/Inicio.css'

const Inicio = () => {
  const imagenesInicio = [imagen1, imagen2, imagen3, imagen4]

  return (
     <Layout>
      <Carrusel imagenes={imagenesInicio} />
      <section className='titulos-sections'>
        <h3>Marcas</h3>
      </section>
      <Marcas></Marcas>
      <section className='titulos-sections'>
        <h3>Ofertas</h3>
      </section>
      <div id='container-ofertas'>
          <Vehiculo 
              imagen= {Auto13}
              modelo='Sentra'
              descripcion='Nissan Sentra 1.8 B17 Fl' 
              anio='2017' 
              color='Azul'
              precio='57.000.000'
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
            imagen= {Auto9}
            modelo='Yaris XS'
            descripcion='Toyota Yaris 1.5 Xs Tp' 
            anio='2022' 
            color='Gris'
            precio='75.500.000'
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
            imagen= {camioneta2}
            modelo='Tracker Turbo RS'
            descripcion='Chevrolet Tracker Turbo RS' 
            anio='2024' 
            color='Negro'
            precio='120.620.000'
          />
          <Vehiculo 
            imagen= {vans14}
            modelo='Urvan'
            descripcion='La Nissan Urvan' 
            anio='1999' 
            color='Blanco'
            precio='62.000.000'
          />
       </div>
     </Layout>
  )
}
export default Inicio;