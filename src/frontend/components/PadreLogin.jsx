import React, { useState } from 'react';
import HeaderSB from '../components/Header.jsx'
import Login from '../components/Login.jsx'
import Opciones from  '../components/Opciones-nav.jsx'

const PadreLogin = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  return (
    <div>
      <HeaderSB onLoginClick={() => setIsLoginVisible(true)} />
      <Opciones onLoginClick={() => setIsLoginVisible(true)} />
      {isLoginVisible && <Login onClose={() => setIsLoginVisible(false)} />}
    </div>
  );
};

export default PadreLogin;