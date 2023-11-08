import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Marcas.css';

const Marcas = () => {
  return (
    <div id='Marcas'>
        <Link to="/chevrolet"><button className='marca Chevrolet'></button></Link>
        <Link to="/ford"><button className='marca Ford'></button></Link>
        <Link to="/toyota"><button className='marca Toyota'></button></Link>
        <Link to="/nissan"><button className='marca Nissan'></button></Link>
        <Link to="/bmw"><button className='marca BMW'></button></Link>
    </div>
  )
}

export default Marcas;
