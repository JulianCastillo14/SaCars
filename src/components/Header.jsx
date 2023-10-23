import React from 'react'
import logo from '../assets/images/logo_sacars.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
        <img className='logo-nav' src={logo} alt='Logo del concesionario"'/>
        <h1>Sacars</h1>
        <nav>
            <a href="#" >AUTOMÓVILES</a>
            <a href="#" >CAMIONETAS</a>
            <a href="#" >PICK-UPS</a>
            <a href="#" >VANS</a>
            <a href="#" >BUSES</a>
            <a href="#" >CAMIONES</a>
        </nav>
        <div className='button-group'>
                <button className='button button-left'>Registrarse</button>
                <button className='button button-right'>Iniciar sesión</button>
        </div>
    </header>
  )
}

export default Header