import React, { useState } from 'react';
import '../styles/Login.css'

const UserIcon = () => (
  <svg className='icon-movil' xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z"/>
  </svg>
);

const PasswordIcon = () => (
    <svg className='icon-movil' xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 24 24">
      <path fill="currentColor" d="M11 18Zm-7 2q-.425 0-.713-.288T3 19v-1.8q0-.85.438-1.563T4.6 14.55q1.55-.775 3.15-1.163T11 13q.5 0 1 .038t1 .112q-.05.525.025 1.05t.25 1.025q-.575-.125-1.137-.175T11 15q-1.4 0-2.775.338T5.5 16.35q-.225.125-.363.35T5 17.2v.8h10.5v2H4Zm14.65 2.65l-.85-.85q-.15-.15-.225-.338t-.075-.387V16.85q-1.1-.325-1.8-1.238T15 13.5q0-1.45 1.025-2.475T18.5 10q1.45 0 2.475 1.025T22 13.5q0 1.125-.638 2t-1.612 1.25l.9.9q.15.15.15.35t-.15.35l-.8.8q-.15.15-.15.35t.15.35l.8.8q.15.15.15.35t-.15.35l-1.3 1.3q-.15.15-.35.15t-.35-.15ZM18.5 14q.425 0 .713-.288T19.5 13q0-.425-.288-.713T18.5 12q-.425 0-.713.288T17.5 13q0 .425.288.713T18.5 14ZM11 12q-1.65 0-2.825-1.175T7 8q0-1.65 1.175-2.825T11 4q1.65 0 2.825 1.175T15 8q0 1.65-1.175 2.825T11 12Zm0-2q.825 0 1.413-.588T13 8q0-.825-.588-1.413T11 6q-.825 0-1.413.588T9 8q0 .825.588 1.413T11 10Zm0-2Z"/>
    </svg>
);

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

const ExitLoginIcon = () => (
  <svg className='icon-movil' xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 256 256">
    <path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/>
  </svg>
);

const Login = ({ onClose, onSignUpClick }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
};

  const handleClick = (e) => {
    onClose(e);
    onSignUpClick(e);
  };

const [isVisible, setIsVisible] = useState(true);

  return isVisible ? (
    <div className='container-login'>
      <div>
        <div className="login">
        <div id='exit' onClick={onClose}>
          <ExitLoginIcon/>
        </div>
          <h2 id='titulo-is'>Iniciar sesión en SaCars </h2>
          <div className='iniciar-sesion'>
              <div className="input-field">
                <h5>Nombre de usuario o correo electrónico</h5>
                <div className='input-default'>
                  <UserIcon />
                  <input className='input-c' type="text"/>
                </div>
              </div>
              <div className="input-field container-password">
                <h5>Contraseña<a href="#"> Olvido la Contraseña</a></h5>
                <div className='input-default' id='section-ps'>
                  <PasswordIcon />
                  <input className='input-c c2' type={passwordShown ? "text" : "password"}/>
                  <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? <EyeOpenIcon /> : <EyeClosedIcon />}
                  </i> 
                </div>
                </div>
            </div>
            <button id='btn-iniciar-sesion'>Iniciar sesión</button>
            <div className='crear-cuenta'>
              ¿Nuevo en Sacars?
              <a href="#" onClick={onSignUpClick}> Crea una cuenta</a>
            </div>
          </div>  
      </div>         
    </div>
          
  ) : null;
};

export default Login;