import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layaut.jsx';
import '../styles/VehiculoScreen.css'

const VehiculoScreen = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [newVehiculo, setNewVehiculo] = useState({ ID_Vehiculo: '', ID_Marca: '', Modelo: '', Descripcion: '', Anio: '', ID_Color: '', Kilometraje: '', Tipo_Combustible: '', Precio: '' });
  const [editVehiculo, setEditVehiculo] = useState(null);
  const [marcas, setMarcas] = useState([]);
  const [colores, setColores] = useState([]);

  useEffect(() => {
    fetchVehiculos();
    fetchMarcas();
    fetchColores();
  }, []);

  const fetchMarcas = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/marca');
      setMarcas(response.data.data);
    } catch (error) {
      console.error('Error al obtener las marcas:', error);
    }
  };
  
  const fetchColores = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/color');
      setColores(response.data.data);
    } catch (error) {
      console.error('Error al obtener los colores:', error);
    }
  };

  const fetchVehiculos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/vehiculo');
      setVehiculos(response.data.data);
    } catch (error) {
      console.error('Error al obtener los vehiculos:', error);
    }
  };

  const createVehiculo = async () => {
    if (newVehiculo) {
      try {
        await axios.post('http://localhost:4000/api/vehiculo', newVehiculo);
        setNewVehiculo({ ID_Vehiculo: '', ID_Marca: '', Modelo: '', Descripcion: '', Anio: '', ID_Color: '', Kilometraje: '', Tipo_Combustible: '', Precio: '' });
        fetchVehiculos();
      } catch (error) {
        console.error('Error al crear el vehiculo:', error);
      }
    }
  };

  const updateVehiculo = async () => {
    if (editVehiculo) {
      try {
        await axios.put(`http://localhost:4000/api/vehiculo/${editVehiculo.ID_Vehiculo}`, newVehiculo);
        setEditVehiculo(null);
        setNewVehiculo({ ID_Vehiculo: '', ID_Marca: '', Modelo: '', Descripcion: '', Anio: '', ID_Color: '', Kilometraje: '', Tipo_Combustible: '', Precio: '' });
        fetchVehiculos();
      } catch (error) {
        console.error('Error al actualizar el vehiculo:', error);
      }
    }
  };

  const deleteVehiculo = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/vehiculo/${id}`);
      fetchVehiculos();
    } catch (error) {
      console.error('Error al eliminar el vehiculo:', error);
    }
  };

  return (
    <Layout>
      <div className="container-VS">
        <h2 className="my-4 text-center">Administración de Vehiculos</h2>
        <form className="mb-3 crear-actualizar-VS">
          <div className="form-group">
            <label>ID del nuevo vehículo</label>
            <input
              type="text"
              className="form-control"
              value={newVehiculo.ID_Vehiculo}
              onChange={e => setNewVehiculo({ ...newVehiculo, ID_Vehiculo: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Marca</label>
            <select
              className="form-control"
              value={newVehiculo.ID_Marca}
              onChange={e => setNewVehiculo({ ...newVehiculo, ID_Marca: e.target.value })}
            >
              <option value="">Selecciona una marca</option>
              {marcas.map((marca) => (
                <option key={marca.ID_Marca} value={marca.ID_Marca}>
                  {marca.Nombre_Marca}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Modelo</label>
            <input
              type="text"
              className="form-control"
              value={newVehiculo.Modelo}
              onChange={e => setNewVehiculo({ ...newVehiculo, Modelo: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <input
              type="text"
              className="form-control"
              value={newVehiculo.Descripcion}
              onChange={e => setNewVehiculo({ ...newVehiculo, Descripcion: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Año</label>
            <input
              type="text"
              className="form-control"
              value={newVehiculo.Anio}
              onChange={e => setNewVehiculo({ ...newVehiculo, Anio: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Color</label>
            <select
              className="form-control"
              value={newVehiculo.ID_Color}
              onChange={e => setNewVehiculo({ ...newVehiculo, ID_Color: e.target.value })}
            >
              <option value="">Selecciona un color</option>
              {colores.map((color) => (
                <option key={color.ID_Color} value={color.ID_Color}>
                  {color.Nombre_Color}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Kilometraje</label>
            <input
              type="text"
              className="form-control"
              value={newVehiculo.Kilometraje}
              onChange={e => setNewVehiculo({ ...newVehiculo, Kilometraje: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Tipo de Combustible</label>
            <input
              type="text"
              className="form-control"
              value={newVehiculo.Tipo_Combustible}
              onChange={e => setNewVehiculo({ ...newVehiculo, Tipo_Combustible: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input
              type="text"
              className="form-control"
              value={newVehiculo.Precio}
              onChange={e => setNewVehiculo({ ...newVehiculo, Precio: e.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary btn-margin-VS"
            onClick={editVehiculo ? updateVehiculo : createVehiculo}
          >
            {editVehiculo ? 'Actualizar' : 'Crear'}
          </button>
        </form>
        <table className="table table-VS">
          <thead>
            <tr>
              <th>ID</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Descripción</th>
              <th>Año</th>
              <th>Color</th>
              <th>Kilometraje</th>
              <th className='ancho-columna'>Tipo de Combustible</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {vehiculos.map((vehiculo) => (
              <tr key={vehiculo.ID_Vehiculo}>
                <td>{vehiculo.ID_Vehiculo}</td>
                <td>{vehiculo.Nombre_Marca}</td>
                <td>{vehiculo.Modelo}</td>
                <td>{vehiculo.Descripcion}</td>
                <td>{vehiculo.Anio}</td>
                <td>{vehiculo.Nombre_Color}</td>
                <td>{vehiculo.Kilometraje}</td>
                <td>{vehiculo.Tipo_Combustible}</td>
                <td>{vehiculo.Precio}</td>
                <td>
                  <button
                    className="btn btn-outline-secondary mr-2"
                    onClick={() => {
                      setNewVehiculo(vehiculo);
                      setEditVehiculo(vehiculo);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-outline-secondary btn-margin-VS"
                    onClick={() => deleteVehiculo(vehiculo.ID_Vehiculo)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default VehiculoScreen;
