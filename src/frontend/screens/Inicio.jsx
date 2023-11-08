import HeaderSB from '../components/Header.jsx'
import OpcionesSB from '../components/Opciones-nav.jsx'
import Carrusel from '../components/Carrusel.jsx'
import Marcas from '../components/Marcas.jsx'
import Login from '../components/Login.jsx'
import SignUp from '../components/SignUp.jsx'
import Configuracion from '../components/Configuracion.jsx'
import Vehiculo from '../components/Vehiculo.jsx'
import Perfil from '../components/Perfil.jsx'
import React, { useState } from 'react'
import imagen1 from '../assets/images/Inicio/joy-sedan-azul-neptuno.jpg'
import imagen2 from '../assets/images/Inicio/tracker-turbo.png';
import imagen3 from '../assets/images/Inicio/colorado.png';
import imagen4 from '../assets/images/Inicio/N400.jpg';
import Auto13 from '../assets/images/Automoviles/sentra-nissan.png';
import Auto7 from '../assets/images/Automoviles/focus-ford.png';
import Auto9 from '../assets/images/Automoviles/yarisxs-toyota.png';

import '../styles/Inicio.css'

const Inicio = () => {
  const [showOpciones, setShowOpciones] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [showPerfil, setShowPerfil] = useState(false);

  const handleToggleOpciones = () => {
    setShowOpciones(!showOpciones);
  }
  const handleToggleConfig = () => {
    setShowConfig(!showConfig);
  }
  const handleTogglePerfil = () => {
    setShowPerfil(!showPerfil);
  }

  const handleShowLogin = () => {
    setShowLogin(true);
  }
  const handleShowSignUp = () => {
    setShowSignUp(true);
  }
  const handleLoginClose = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const imagenesInicio = [imagen1, imagen2, imagen3, imagen4]

  return (
    <div>
      <HeaderSB onToggleOpciones={handleToggleOpciones} onToggleConfig={handleToggleConfig} onLoginClick={handleShowLogin} onSignUpClick={handleShowSignUp} />
      {showOpciones && <OpcionesSB onLoginClick={handleShowLogin} onSignUpClick={handleShowSignUp} />}
      {showLogin && <Login onClose={handleCloseLogin} onSignUpClick={handleLoginClose} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
      {showConfig && <Configuracion onTogglePerfil={handleTogglePerfil}/>}
      {showPerfil && <Perfil onClose={handleTogglePerfil}/>}
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
        </div>
    </div>
  )
}
export default Inicio;