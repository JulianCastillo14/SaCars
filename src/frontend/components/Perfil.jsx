import React, {useState} from 'react';
import '../styles/Perfil.css'

const ExitPerfilIcon = () => (
  <svg className='icon-movil' xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 256 256">
    <path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/>
  </svg>
);

const Perfil = ({onClose}) => {
  const [isVisible] = useState(true);

  return isVisible ? (
    <div id='container-perfil'>
      <div>
        <div id='exit-info' onClick={onClose}>
          <ExitPerfilIcon/>
        </div>
        <div id='Datos'>
          <h2>Perfil del Usuario</h2>
          <p><strong className='Dato'>Nombre completo:</strong> </p>
          <p><strong className='Dato'>Número de documento:</strong> </p>
          <p><strong className='Dato'>Tipo de documento:</strong> </p>
          <p><strong className='Dato'>Fecha de nacimiento:</strong> </p>
          <p><strong className='Dato'>Celular:</strong></p>
          <p><strong className='Dato'>Correo electrónico:</strong> </p>
          <p><strong className='Dato'>Nombre de usuario:</strong> </p>
        </div>
      </div>
    </div>
  ): null;
};

export default Perfil;
