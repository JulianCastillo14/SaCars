import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layaut.jsx';
import '../styles/ColorScreen.css'

const ColorScreen = () => {
  const [colores, setColores] = useState([]);
  const [newColor, setNewColor] = useState('');
  const [newId, setNewId] = useState('');
  const [editColor, setEditColor] = useState(null);

  useEffect(() => {
    fetchColores();
  }, []);

  const fetchColores = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/color');
      setColores(response.data.data);
    } catch (error) {
      console.error('Error al obtener los colores:', error);
    }
  };

  const createColor = async () => {
    if (newColor && newId) {
      try {
        await axios.post('http://localhost:4000/api/color', { ID_Color: newId, Nombre_Color: newColor });
        setNewColor('');
        setNewId('');
        fetchColores();
      } catch (error) {
        console.error('Error al crear el color:', error);
      }
    }
  };

  const updateColor = async () => {
    if (editColor) {
      try {
        await axios.put(`http://localhost:4000/api/color/${editColor.ID_Color}`, { Nombre_Color: newColor });
        setEditColor(null);
        setNewColor('');
        fetchColores();
      } catch (error) {
        console.error('Error al actualizar el color:', error);
      }
    }
  };

  const deleteColor = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/color/${id}`);
      fetchColores();
    } catch (error) {
      console.error('Error al eliminar el color:', error);
    }
  };

  return (
    <Layout>
      <div className="container-CS">
        <h2 className="my-4 text-center">Administración de Colores</h2>
        <div className="input-group mb-3 crear-actualizar-CS">
          <input
            type="text"
            className="form-control"
            placeholder="ID del nuevo color"
            value={newId}
            onChange={e => setNewId(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Nuevo color"
            value={newColor}
            onChange={e => setNewColor(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary btn-margin-l-CS"
              type="button"
              onClick={editColor ? updateColor : createColor}
            >
              {editColor ? 'Actualizar' : 'Crear'}
            </button>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Color</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {colores.map((color) => (
              <tr key={color.ID_Color}>
                <td>{color.ID_Color}</td>
                <td>{color.Nombre_Color}</td>
                <td>
                  <button
                    className="btn btn-outline-secondary mr-2 btn-margin-CS"
                    onClick={() => {
                      setNewColor(color.Nombre_Color);
                      setNewId(color.ID_Color);
                      setEditColor(color);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => deleteColor(color.ID_Color)}
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

export default ColorScreen;
