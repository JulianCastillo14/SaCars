import React, { useContext, useState} from 'react';
import '../styles/Perfil.css';
import UserContext from '../context/UserContext.jsx';
import Layout from './Layaut.jsx';

const ExitPerfilIcon = () => (
  <svg className='icon-movil' xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 256 256">
    <path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/>
  </svg>
);

const Perfil = ({ onClose }) => {
  const [isVisible] = useState(true);
  const { user } = useContext(UserContext); // Accede al usuario desde el contexto

const fechaNacimiento = new Date(user.Fecha_Nacimiento);
const fechaFormateada = fechaNacimiento.toISOString().split('T')[0]; // Devuelve '2002-03-23'


  return isVisible && user ? (
    <Layout>
      <div id='container-perfil'>
      <div>
        <div id='exit-info' onClick={onClose}>
          <ExitPerfilIcon/>
        </div>
        <div id='Datos'>
          <h2>Perfil del Usuario</h2>
          <p><strong className='Dato'>Nombre completo:</strong> {user.Nombre_Completo}</p>
          <p><strong className='Dato'>Número de documento:</strong> {user.Numero_Documento}</p>
          <p><strong className='Dato'>Tipo de documento:</strong> {user.Descripcion}</p>
          <p><strong className='Dato'>Fecha de nacimiento:</strong> {fechaFormateada}</p>
          <p><strong className='Dato'>Celular:</strong> {user.Celular}</p>
          <p><strong className='Dato'>Correo electrónico:</strong> {user.Correo}</p>
          <p><strong className='Dato'>Nombre de usuario:</strong> {user.Usuario}</p>
        </div>
      </div>
    </div>
    </Layout>
    
  ) : null;
};

export default Perfil;
