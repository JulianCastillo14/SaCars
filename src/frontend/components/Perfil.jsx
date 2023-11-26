import React, { useContext, useState} from 'react';
import '../styles/Perfil.css';
import  UserContext  from '../context/UserContext.jsx'; 
import Layout from './Layaut.jsx';

const Perfil = () => {
  const [isVisible] = useState(true);
  const { user } = useContext(UserContext);

  if (!user) {
    return null;
  }

  const fechaNacimiento = new Date(user.Fecha_Nacimiento);
  const fechaFormateada = fechaNacimiento.toISOString().split('T')[0]; // Devuelve '2002-03-23'

  return isVisible ? (
    <Layout>
        <div id='Datos'>
          <div id='info'>
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
    </Layout>
  ) : null;
};

export default Perfil;

