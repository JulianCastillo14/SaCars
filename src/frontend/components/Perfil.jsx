import React from 'react';

const Perfil = ({ usuario }) => {
  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <p><strong>Nombre completo:</strong> {usuario.nombreCompleto}</p>
      <p><strong>Número de documento:</strong> {usuario.numeroDocumento}</p>
      <p><strong>Tipo de documento:</strong> {usuario.tipoDocumento}</p>
      <p><strong>Fecha de nacimiento:</strong> {usuario.fechaNacimiento}</p>
      <p><strong>Celular:</strong> {usuario.celular}</p>
      <p><strong>Correo electrónico:</strong> {usuario.correoElectronico}</p>
      <p><strong>Nombre de usuario:</strong> {usuario.nombreUsuario}</p>
    </div>
  );
};

export default Perfil;
