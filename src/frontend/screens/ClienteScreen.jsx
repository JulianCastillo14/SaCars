import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layaut.jsx';
import '../styles/ClienteScreen.css'

const ClienteScreen = () => {
  const [clientes, setClientes] = useState([]);
  const [tiposDocumento, setTiposDocumento] = useState([]);
  const [newCliente, setNewCliente] = useState({ Numero_Documento: '', ID_Tipo_Documento: '', Nombre_Completo: '', Fecha_Nacimiento: '', Celular: '', Correo: '', Usuario: '', Contraseña: '' });
  const [editCliente, setEditCliente] = useState(null);

  useEffect(() => {
    fetchClientes();
    fetchTiposDocumento();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/cliente');
      setClientes(response.data.data);
    } catch (error) {
      console.error('Error al obtener los clientes:', error);
    }
  };

  const fetchTiposDocumento = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/tipo_documento');
      setTiposDocumento(response.data.data);
    } catch (error) {
      console.error('Error al obtener los tipos de documento:', error);
    }
  };

  const createCliente = async () => {
    if (newCliente) {
      try {
        await axios.post('http://localhost:4000/api/cliente', newCliente);
        setNewCliente({ Numero_Documento: '', ID_Tipo_Documento: '', Nombre_Completo: '', Fecha_Nacimiento: '', Celular: '', Correo: '', Usuario: '', Contraseña: '' });
        fetchClientes();
      } catch (error) {
        console.error('Error al crear el cliente:', error);
      }
    }
  };
  
  const updateCliente = async () => {
    if (editCliente) {
      try {
        await axios.put(`http://localhost:4000/api/cliente/${editCliente.Numero_Documento}`, newCliente);
        setEditCliente(null);
        setNewCliente({ Numero_Documento: '', ID_Tipo_Documento: '', Nombre_Completo: '', Fecha_Nacimiento: '', Celular: '', Correo: '', Usuario: '', Contraseña: '' });
        fetchClientes();
      } catch (error) {
        console.error('Error al actualizar el cliente:', error);
      }
    }
  };
  
  const deleteCliente = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/cliente/${id}`);
      fetchClientes();
    } catch (error) {
      console.error('Error al eliminar el cliente:', error);
    }
  };

  
  
  return (
    <Layout>
        <div className="container-ClieS">
        <h2 className="my-4 text-center">Administración de Clientes</h2>
        <form className="mb-3 crear-actualizar-CLieS">
          <div className="form-group">
            <label>Número de Documento</label>
            <input
              type="text"
              className="form-control"
              value={newCliente.Numero_Documento}
              onChange={e => setNewCliente({ ...newCliente, Numero_Documento: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Tipo de Documento</label>
            <select
              className="form-control"
              value={newCliente.ID_Tipo_Documento}
              onChange={e => setNewCliente({ ...newCliente, ID_Tipo_Documento: e.target.value })}
            >
              <option value="">Selecciona un tipo de documento</option>
              {tiposDocumento.map((tipo) => (
                <option key={tipo.ID_Tipo_Documento} value={tipo.ID_Tipo_Documento}>
                  {tipo.Descripcion}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              className="form-control"
              value={newCliente.Nombre_Completo}
              onChange={e => setNewCliente({ ...newCliente, Nombre_Completo: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Fecha de Nacimiento</label>
            <input
              type="date"
              className="form-control"
              value={newCliente.Fecha_Nacimiento}
              onChange={e => setNewCliente({ ...newCliente, Fecha_Nacimiento: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Celular</label>
            <input
              type="text"
              className="form-control"
              value={newCliente.Celular}
              onChange={e => setNewCliente({ ...newCliente, Celular: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Correo</label>
            <input
            type="email"
            className="form-control"
            value={newCliente.Correo}
            onChange={e => setNewCliente({ ...newCliente, Correo: e.target.value })}
          />
          </div>
          <div className="form-group">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control"
              value={newCliente.Usuario}
              onChange={e => setNewCliente({ ...newCliente, Usuario: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={newCliente.Contraseña}
              onChange={e => setNewCliente({ ...newCliente, Contraseña: e.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary btn-margin-CLieS"
            onClick={editCliente ? updateCliente : createCliente}
          >
            {editCliente ? 'Actualizar' : 'Crear'}
          </button>
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Número de Documento</th>
              <th>Tipo de Documento</th>
              <th>Nombre Completo</th>
              <th>Fecha de Nacimiento</th>
              <th>Celular</th>
              <th>Correo</th>
              <th>Usuario</th>
              <th>Contraseña</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.Numero_Documento}>
                <td>{cliente.Numero_Documento}</td>
                <td>{cliente.Descripcion}</td>
                <td>{cliente.Nombre_Completo}</td>
                <td>{new Date(cliente.Fecha_Nacimiento).toISOString().split('T')[0]}</td>
                <td>{cliente.Celular}</td>
                <td>{cliente.Correo}</td>
                <td>{cliente.Usuario}</td>
                <td>{cliente.Contraseña}</td>
                <td>
                <button
                    className="btn btn-outline-secondary mr-2"
                    onClick={() => {
                      setNewCliente(cliente);
                      setEditCliente(cliente);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-outline-secondary btn-margin-VS"
                    onClick={() => deleteCliente(cliente.Numero_Documento)}
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

export default ClienteScreen;
