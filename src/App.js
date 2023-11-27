import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Automoviles from './frontend/screens/Automoviles.jsx';
import BMW from './frontend/screens/BMW.jsx';
import Camionetas from './frontend/screens/Camionetas.jsx';
import Chevrolet from './frontend/screens/Chevrolet.jsx';
import Ford from './frontend/screens/Ford.jsx';
import Inicio from './frontend/screens/Inicio.jsx';
import Nissan from './frontend/screens/Nissan.jsx';
import PickUps from './frontend/screens/PickUps.jsx';
import Toyota from './frontend/screens/Toyota.jsx';
import Vans from './frontend/screens/Vans.jsx';
import UserContext from './frontend/context/UserContext.jsx';
import Perfil from './frontend/components/Perfil.jsx';
import AdminScreen from './frontend/screens/AdminScreen.jsx'
import MarcaScreen from './frontend/screens/MarcaScreen.jsx';
import ColorScreen from './frontend/screens/ColorScreen.jsx';
import VehiculoScreen from './frontend/screens/VehiculoScreen.jsx';
import ClienteScreen from './frontend/screens/ClienteScreen.jsx';
function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/automoviles" element={<Automoviles />} />
          <Route path="/camionetas" element={<Camionetas />} />
          <Route path="/pickups" element={<PickUps />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/bmw" element={<BMW />} />
          <Route path="/chevrolet" element={<Chevrolet />} />
          <Route path="/ford" element={<Ford />} />
          <Route path="/nissan" element={<Nissan />} />
          <Route path="/toyota" element={<Toyota />} />
          <Route path="/admin" element={<AdminScreen/>} />
          <Route path="/marca" element={<MarcaScreen/>} />
          <Route path="/color" element={<ColorScreen/>} />
          <Route path="/vehiculo" element={<VehiculoScreen/>} />
          <Route path="/cliente" element={<ClienteScreen/>} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;