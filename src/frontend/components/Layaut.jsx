import React, { useState }  from 'react';
import HeaderSB from './Header.jsx';
import OpcionesSB from './Opciones-nav.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Configuracion from './Configuracion.jsx';
import Perfil from './Perfil.jsx';

const Layout = ({ children }) => {
  const [showOpciones, setShowOpciones] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [showPerfil, setShowPerfil] = useState(false);

  const handleToggleOpciones = () => {
    setShowOpciones(!showOpciones);
  }
  const handleToggleConfig = () => {
    setShowConfig(!showConfig);
  }
  const handleTogglePerfil = () => {
    setShowPerfil(!showPerfil);
  }

  const handleShowLogin = () => {
    setShowLogin(true);
  }
  const handleShowSignUp = () => {
    setShowSignUp(true);
  }
  const handleLoginClose = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <div>
      <HeaderSB onToggleOpciones={handleToggleOpciones} onToggleConfig={handleToggleConfig} onLoginClick={handleShowLogin} onSignUpClick={handleShowSignUp} />
      {showOpciones && <OpcionesSB onLoginClick={handleShowLogin} onSignUpClick={handleShowSignUp} />}
      {showLogin && <Login onClose={handleCloseLogin} onSignUpClick={handleLoginClose} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
      {showConfig && <Configuracion onTogglePerfil={handleTogglePerfil}/>}
      {showPerfil && <Perfil onClose={handleTogglePerfil}/>}
      {children}
    </div>
  );
};

export default Layout;