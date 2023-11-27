import React, { useState, useEffect } from 'react';
import '../styles/SingUp.css'; 
import axios from 'axios';

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
    Nombre_Completo: '',
    Numero_Documento: '',
    ID_Tipo_Documento: '',
    Fecha_Nacimiento: '',
    Correo: '',
    Celular: '',
    Usuario: '',
    Contraseña: '',
    contrasenaRepetir: ''
  });

  const [tiposDocumento, setTiposDocumento] = useState([]);
  const [registroExitoso, setRegistroExitoso] = useState(false);
  
  useEffect(() => {
    fetchTiposDocumento();
  }, []);

  const fetchTiposDocumento = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/tipo_documento');
      setTiposDocumento(response.data.data);
    } catch (error) {
      console.error('Error al obtener los tipos de documento:', error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    // Verificar que las contraseñas coinciden
    if (form.Contraseña !== form.contrasenaRepetir) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    // Crear un nuevo objeto con los datos que se guardarán en la base de datos
    const cliente = { ...form };
    delete cliente.contrasenaRepetir;

    try {
      const response = await axios.post('http://localhost:4000/api/cliente', cliente);
      if (response.data.success) {
        console.log('Cliente creado exitosamente');
        setRegistroExitoso(true);
      } else {
        console.error('Error al crear el cliente');
      }
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }
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
        {registroExitoso ? (
          <div id='registro-exitoso'>¡Registro exitoso! Puedes iniciar sesión ahora.</div>
        ) : (
          <form id='formulario-signup' onSubmit={handleSubmit}>
            <h2 id='titulo-r'>Ingresa los siguientes datos:</h2>
            <label htmlFor="Nombre_Completo">Nombre completo</label>
            <input className="signup-input" type="text" name="Nombre_Completo"  onChange={handleChange} />
            <label htmlFor="Numero_Documento">Número de documento</label>
            <input className="signup-input" type="text" name="Numero_Documento"  onChange={handleChange} />
            <label htmlFor="ID_Tipo_Documento">Tipo de documento</label>
            <select value={form.ID_Tipo_Documento} className="signup-input" name="ID_Tipo_Documento" onChange={handleChange}>
              <option value="">Selecciona un tipo de documento</option>
              {tiposDocumento.map((tipo) => (
                <option key={tipo.ID_Tipo_Documento} value={tipo.ID_Tipo_Documento}>
                  {tipo.Descripcion}
                </option>
              ))}
            </select>
            <label htmlFor="Fecha_Nacimiento">Fecha de nacimiento</label>
            <input className="signup-input" type="date" name="Fecha_Nacimiento" onChange={handleChange} />
            <label htmlFor="Celular">Celular</label>
            <input className="signup-input" type="text" name="Celular"  onChange={handleChange} />
            <label htmlFor="Correo">Correo electrónico</label>
            <input className="signup-input" type="email" name="Correo" placeholder="Correo electrónico" onChange={handleChange} />
            <label htmlFor="Usuario">Nombre de usuario</label>
            <input className="signup-input" type="text" name="Usuario" placeholder="Nombre de usuario" onChange={handleChange} />
            <div className='passwords c1'>
              <label htmlFor="Contraseña">Contraseña</label>
              <input className="signup-input" type={passwordShown ? "text" : "password"} name="Contraseña" placeholder="Contraseña" onChange={handleChange} />
              <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? <EyeOpenIcon /> : <EyeClosedIcon />}
              </i> 
            </div>
            <div className='passwords c2'>
              <label htmlFor="contrasenaRepetir">Repetir contraseña</label>
              <input className="signup-input" type={passwordShown ? "text" : "password"} name="contrasenaRepetir" placeholder="Repetir contraseña" onChange={handleChange} />
            </div>
            <button id='btn-registrarse' type="submit">Registrarse</button>
          </form>
        )}
      </div>
    </div>
  ): null;
};

export default SignUp;
