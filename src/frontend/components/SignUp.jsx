import React, { useState } from 'react';
import '../styles/SingUp.css'; 

  const EyeClosedIcon = () => (
    <svg className='icon-movil' xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z"/>
    </svg>
  );
  
  const EyeOpenIcon = () => (
    <svg className='icon-movil'  xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"/>
    </svg>
  );

  const ExitSingInIcon = () => (
    <svg className='icon-movil' xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 256 256">
      <path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/>
    </svg>
  );

  const SignUp = ({ onClose }) => {
    const [form, setForm] = useState({
      nombreCompleto: '',
      numeroDocumento: '',
      tipoDocumento: '',
      fechaNacimiento: '',
      direccion: '',
      correoElectronico: '',
      celular: '',
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
  
    const [passwordShown, setPasswordShown] = useState(false);
      const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };

  const [isVisible, setIsVisible] = useState(true);

  return isVisible ? (
    <div className="container-signup">
      <div>
        <div id='exit' onClick={onClose}>
            <ExitSingInIcon/>
        </div>
        <form id='formulario-signup' onSubmit={handleSubmit}>
        <h2>Ingresa los siguientes datos:</h2>
        <label htmlFor="nombreCompleto">Nombre completo</label>
        <input className="signup-input" type="text" name="nombreCompleto"  onChange={handleChange} />
        <label htmlFor="numeroDocumento">Número de documento</label>
        <input className="signup-input" type="text" name="numeroDocumento"  onChange={handleChange} />
        <label htmlFor="tipoDocumento">Tipo de documento</label>
        <select className="signup-input" name="tipoDocumento" onChange={handleChange}>
          <option value="" disabled selected>Selecciona un tipo de documento</option>
          <option value="TI">Tarjeta de identidad</option>
          <option value="CC">Cédula de ciudadanía</option>
          <option value="TE">Tarjeta de extranjería</option>
          <option value="CE">Cédula de extranjería</option>
        </select>
        <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
        <input className="signup-input" type="date" name="fechaNacimiento" onChange={handleChange} />
        <label htmlFor="direccion">Dirección*</label>
        <input className="signup-input" type="text" name="direccion"  onChange={handleChange} />
        <label htmlFor="celular">Celular*</label>
        <input className="signup-input" type="text" name="celular"  onChange={handleChange} />
        <label htmlFor="correoElectronico">Correo electrónico</label>
        <input className="signup-input" type="email" name="correoElectronico" placeholder="Correo electrónico" onChange={handleChange} />
        <label htmlFor="nombreUsuario">Nombre de usuario</label>
        <input className="signup-input" type="text" name="nombreUsuario" placeholder="Nombre de usuario" onChange={handleChange} />
        <div className='passwords c1'>
          <label htmlFor="contrasena">Contraseña</label>
          <input className="signup-input" type={passwordShown ? "text" : "password"} name="contrasena" placeholder="Contraseña" onChange={handleChange} />
          <i onClick={togglePasswordVisiblity}>
              {passwordShown ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </i> 
        </div>
        <div className='passwords c2'>
          <label htmlFor="contrasena-repetir">Repetir contraseña</label>
          <input className="signup-input" type={passwordShown ? "text" : "password"} name="contrasena-repetir" placeholder="Repetir contraseña" onChange={handleChange} />
        </div>
         
        <button id='btn-registrarse' type="submit">Registrarse</button>
      </form>

      </div>
    </div>
  ): null;
};

export default SignUp;


