import HeaderSB from '../components/Header.jsx'
import OpcionesSB from '../components/Opciones-nav.jsx'
import Carrusel from '../components/Carrusel.jsx'
import Marcas from '../components/Marcas.jsx'
import Login from '../components/Login.jsx'
import SignUp from '../components/SignUp.jsx'

import React, { useState } from 'react'
import imagen1 from '../assets/images/Inicio/joy-sedan-azul-neptuno.jpg'
import imagen2 from '../assets/images/Inicio/tracker-turbo.png';
import imagen3 from '../assets/images/Inicio/colorado.png';
import imagen4 from '../assets/images/Inicio/N400.jpg';
import '../styles/Inicio.css'

const Inicio = () => {
  const [showOpciones, setShowOpciones] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleToggleOpciones = () => {
    setShowOpciones(!showOpciones);
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
      <HeaderSB onToggleOpciones={handleToggleOpciones} onLoginClick={handleShowLogin} onSignUpClick={handleShowSignUp} />
      {showOpciones && <OpcionesSB onLoginClick={handleShowLogin} onSignUpClick={handleShowSignUp} />}
      {showLogin && <Login onClose={handleCloseLogin} onSignUpClick={handleLoginClose} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
      <Carrusel imagenes={imagenesInicio} />
      <section id='marcas'>
        <h3>Marcas</h3>
      </section>
      <Marcas></Marcas>
    </div>
  )
}
export default Inicio;