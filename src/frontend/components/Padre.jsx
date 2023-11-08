const Padre = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  const handleLoginClose = () => {
    setIsLoginVisible(false);
    setIsSignUpVisible(true);
  };

  const handleExitClick = () => {
    setIsLoginVisible(false);
  };

  return (
    <div>
      <HeaderSB onLoginClick={() => setIsLoginVisible(true)} />
      <Opciones onLoginClick={() => setIsLoginVisible(true)} />
      {isLoginVisible && <Login onClose={handleExitClick} onSignUpClick={handleLoginClose} />}
      {isSignUpVisible && <SignUp onClose={() => setIsSignUpVisible(false)} />}
    </div>
  );
};

export default Padre;
