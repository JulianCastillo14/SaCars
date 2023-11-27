import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layaut.jsx';
import '../styles/CotizacionScreen.css'

const CotizacionScreen = () => {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [newCotizacion, setNewCotizacion] = useState({ ID_Cotizacion: '', ID_Vehiculo: '', Numero_Documento: '', Fecha: '' });
  const [editCotizacion, setEditCotizacion] = useState(null);
  
  useEffect(() => {
    fetchCotizaciones();
    fetchVehiculos();
    fetchClientes();
  }, []);

  const fetchCotizaciones = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/cotizacion');
      setCotizaciones(response.data.data);
    } catch (error) {
      console.error('Error al obtener las cotizaciones:', error);
    }
  };

  const fetchVehiculos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/vehiculo');
      setVehiculos(response.data.data);
    } catch (error) {
      console.error('Error al obtener los vehículos:', error);
    }
  };

  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/cliente');
      setClientes(response.data.data);
    } catch (error) {
      console.error('Error al obtener los clientes:', error);
    }
  };

  const createCotizacion = async () => {
    if (newCotizacion) {
      try {
        const now = new Date();
        const fecha = now.toISOString().slice(0, 19).replace('T', ' ');
        const cotizacion = { ...newCotizacion, Fecha: fecha };
        await axios.post('http://localhost:4000/api/cotizacion', cotizacion);
        setNewCotizacion({ ID_Cotizacion: '', ID_Vehiculo: '', Numero_Documento: '', Fecha: '' });
        fetchCotizaciones();
      } catch (error) {
        console.error('Error al crear la cotización:', error);
      }
    }
  };
  
  const updateCotizacion = async () => {
    if (editCotizacion) {
      try {
        const now = new Date();
        const fecha = now.toISOString().slice(0, 19).replace('T', ' ');
        const cotizacion = { ...newCotizacion, Fecha: fecha };
        await axios.put(`http://localhost:4000/api/cotizacion/${editCotizacion.ID_Cotizacion}`, cotizacion);
        setEditCotizacion(null);
        setNewCotizacion({ ID_Cotizacion: '', ID_Vehiculo: '', Numero_Documento: '', Fecha: '' });
        fetchCotizaciones();
      } catch (error) {
        console.error('Error al actualizar la cotización:', error);
      }
    }
  };
  
  
  const deleteCotizacion = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/cotizacion/${id}`);
      fetchCotizaciones();
    } catch (error) {
      console.error('Error al eliminar la cotización:', error);
    }
  };

  return (
    <Layout>
      <div className="container-CotS">
        <h2 className="my-4 text-center">Administración de Cotizaciones</h2>
        <form className="mb-3 crear-actualizar-CotS">
        <div className="form-group">
        <label>ID de la Cotización</label>
            <input
              type="text"
              className="form-control"
              value={newCotizacion.ID_Cotizacion}
              onChange={e => setNewCotizacion({ ...newCotizacion, ID_Cotizacion: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>ID del Vehículo</label>
            <select
              className="form-control"
              value={newCotizacion.ID_Vehiculo}
              onChange={e => setNewCotizacion({ ...newCotizacion, ID_Vehiculo: e.target.value })}
            >
              <option value="" disabled>Selecciona un vehículo</option>
              {vehiculos.map((vehiculo) => (
                <option key={vehiculo.ID_Vehiculo} value={vehiculo.ID_Vehiculo}>
                  {vehiculo.Descripcion}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Número de Documento del Cliente</label>
            <select
              className="form-control"
              value={newCotizacion.Numero_Documento}
              onChange={e => setNewCotizacion({ ...newCotizacion, Numero_Documento: e.target.value })}
            >
              <option value="" disabled>Selecciona un cliente</option>
              {clientes.map((cliente) => (
                <option key={cliente.Numero_Documento} value={cliente.Numero_Documento}>
                  {cliente.Nombre_Completo}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary btn-margin-CotS"
            onClick={editCotizacion ? updateCotizacion : createCotizacion}
          >
            {editCotizacion ? 'Actualizar' : 'Crear'}
          </button>
        </form>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>ID_Cotizacion</th>
            <th>Descripción del Vehículo</th>
            <th>Nombre del Cliente</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cotizaciones.map((cotizacion) => {
            const vehiculo = vehiculos.find(v => v.ID_Vehiculo === cotizacion.ID_Vehiculo);
            const cliente = clientes.find(c => c.Numero_Documento === cotizacion.Numero_Documento);
            return (
              <tr key={cotizacion.ID_Cotizacion}>
                <td>{cotizacion.ID_Cotizacion}</td>
                <td>{vehiculo ? vehiculo.Descripcion : 'Vehículo no encontrado'}</td>
                <td>{cliente ? cliente.Nombre_Completo : 'Cliente no encontrado'}</td>
                <td>{cotizacion.Fecha.split('T')[0]}</td>
                <td>
                <button className="btn btn-outline-secondary mr-2" onClick={() => {
                    setEditCotizacion(cotizacion);
                    setNewCotizacion(cotizacion);
                  }}>Editar</button>
                  <button className="btn btn-outline-secondary btn-margin-CotS" onClick={() => deleteCotizacion(cotizacion.ID_Cotizacion)}>Eliminar</button>
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default CotizacionScreen;
