import React, { useState } from 'react';
import './SignUp.css'; // Asegúrate de importar tu archivo CSS

const SignUp = () => {
  const [form, setForm] = useState({
    nombreCompleto: '',
    numeroDocumento: '',
    tipoDocumento: '',
    fechaNacimiento: '',
    direccion: '',
    correoElectronico: '',
    nombreUsuario: '',
    contrasena: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviándolo a una API
    console.log(form);
  }

  return (
    <div className="container-signin">
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombreCompleto" placeholder="Nombre completo" onChange={handleChange} />
        <input type="text" name="numeroDocumento" placeholder="Número de documento" onChange={handleChange} />
        <select name="tipoDocumento" onChange={handleChange}>
          <option value="" disabled selected>Selecciona un tipo de documento</option>
          <option value="TI">Tarjeta de identidad</option>
          <option value="CC">Cédula de ciudadanía</option>
          <option value="TE">Tarjeta de extranjería</option>
          <option value="CE">Cédula de extranjería</option>
        </select>
        <input type="date" name="fechaNacimiento" onChange={handleChange} />
        <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} />
        <input type="email" name="correoElectronico" placeholder="Correo electrónico" onChange={handleChange} />
        <input type="text" name="nombreUsuario" placeholder="Nombre de usuario" onChange={handleChange} />
        <input type="password" name="contrasena" placeholder="Contraseña" onChange={handleChange} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default SignUp;


