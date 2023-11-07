import React from 'react'
import HeaderSB from '../components/Header.jsx'
import SignUp from '../components/SignUp.jsx'
import Opciones from  '../components/Opciones-nav.jsx'

const PadreSignUp = () => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  return (
    <div>
      <HeaderSB onSignUpClick={() => setIsSignUpVisible(true)} />
      <Opciones onSignUpClick={() => setIsSignUpVisible(true)} />
      {isSignUpVisible && <SignUp onClose={() => setIsSignUpVisible(false)} />}
    </div>
  )
}

export default PadreSignUp