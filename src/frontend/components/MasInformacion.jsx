import React, { useState } from 'react';
import '../styles/MásInfromacion.css'

const ExitSingInIcon = () => (
    <svg className='icon-movil' xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 256 256">
      <path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/>
    </svg>
  );

const MasInformacion = ({ descripcion, onClose }) => {
    const [form, setForm] = useState({
        nombreCompleto: '',
        numeroDocumento: '',
        tipoDocumento: '',
        fechaNacimiento: '',
        direccion: '',
        celular: '',
        correoElectronico: '',
        nombreUsuario: '',
        contrasena: '',
        contrasenaRepetir: ''
      });
  
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se va a manejar el envío del formulario
        console.log(form);
      }

    const [isVisible, setIsVisible] = useState(true);

    

    return isVisible ? (
      <div className="container-masInfo">
        <div>
          <div id='exit' onClick={onClose}>
              <ExitSingInIcon/>
          </div>
          <form id='formulario-masInfo' onSubmit={handleSubmit}>
          <h2 id='titulo-form'>Ingresa los siguientes datos para contactarte:</h2>
          <label htmlFor="nombreCompleto">Nombre completo</label>
          <input className="masInfo-input" type="text" name="nombreCompleto" onChange={handleChange} />
          <label htmlFor="numeroDocumento">Número de documento</label>
          <input className="masInfo-input" type="text" name="numeroDocumento" onChange={handleChange} />
          <label htmlFor="tipoDocumento">Tipo de documento</label>
          <select value="" className="masInfo-input" name="tipoDocumento" onChange={handleChange}>
            <option value="" disabled selected>Selecciona un tipo de documento</option>
            <option value="TI">Tarjeta de identidad</option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="TE">Tarjeta de extranjería</option>
            <option value="CE">Cédula de extranjería</option>
          </select>
          <label htmlFor="celular">Celular</label>
          <input className="masInfo-input" type="text" name="celular"  onChange={handleChange} />
          <label htmlFor="correoElectronico">Correo electrónico</label>
          <input className="masInfo-input" type="email" name="correoElectronico" onChange={handleChange} />
          <h4 id='descripcion-v'>Detalle del vehiculo</h4>
          <p id='des'>{descripcion}</p>
          <button id='btn-enviar' type="submit">Enviar</button>
          
        </form>
        </div>
      </div>
    ): null;
}

export default MasInformacion