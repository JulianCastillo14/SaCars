import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AdminScreen.css';
import Layout from '../components/Layaut';
import { Link } from 'react-router-dom';

const AdminScreen = () => {
  const tables = ['Marca', 'Color', 'Vehiculo', 'Cliente','Cotizacion'];

  return (
    <Layout>
    <div className="container-AD admin-screen">
      <h2 className="my-4 text-center text-light">Administración tablas de la base de datos</h2>
      <ul className="list-group">
        {tables.map((table, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {table}
            <Link to={`/${table.toLowerCase()}`}>
              <button className="btn btn-light">
                Seleccionar
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  );
};

export default AdminScreen;
