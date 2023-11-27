import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layaut.jsx";
import "../styles/MarcaScreen.css";
const MarcaScreen = () => {
  const [marcas, setMarcas] = useState([]);
  const [newMarca, setNewMarca] = useState("");
  const [newId, setNewId] = useState("");
  const [editMarca, setEditMarca] = useState(null);

  useEffect(() => {
    fetchMarcas();
  }, []);

  const fetchMarcas = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/marca");
      setMarcas(response.data.data);
    } catch (error) {
      console.error("Error al obtener las marcas:", error);
    }
  };

  const createMarca = async () => {
    if (newMarca && newId) {
      try {
        await axios.post("http://localhost:4000/api/marca", {
          ID_Marca: newId,
          Nombre_Marca: newMarca,
        });
        setNewMarca("");
        setNewId("");
        fetchMarcas();
      } catch (error) {
        console.error("Error al crear la marca:", error);
      }
    }
  };

  const updateMarca = async () => {
    if (editMarca) {
      try {
        await axios.put(
          `http://localhost:4000/api/marca/${editMarca.ID_Marca}`,
          { Nombre_Marca: newMarca }
        );
        setEditMarca(null);
        setNewMarca("");
        fetchMarcas();
      } catch (error) {
        console.error("Error al actualizar la marca:", error);
      }
    }
  };

  const deleteMarca = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/marca/${id}`);
      fetchMarcas();
    } catch (error) {
      console.error("Error al eliminar la marca:", error);
    }
  };

  return (
    <Layout>
      <div className="container-MS">
        <h2 className="my-4 text-center">Administración de Marcas</h2>
        <div className="input-group mb-3 crear-actualizar">
          <input
            type="text"
            className="form-control"
            placeholder="ID de la nueva marca"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Nueva marca"
            value={newMarca}
            onChange={(e) => setNewMarca(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary btn-margin-l"
              type="button"
              onClick={editMarca ? updateMarca : createMarca}
            >
              {editMarca ? "Actualizar" : "Crear"}
            </button>
          </div>
        </div>
        <table className="table table-MS">
          <thead>
            <tr>
              <th>ID</th>
              <th>Marca</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {marcas.map((marca) => (
              <tr key={marca.ID_Marca}>
                <td>{marca.ID_Marca}</td>
                <td>{marca.Nombre_Marca}</td>
                <td>
                  <button
                    className="btn btn-outline-secondary mr-2 btn-margin"
                    onClick={() => {
                      setNewMarca(marca.Nombre_Marca);
                      setNewId(marca.ID_Marca);
                      setEditMarca(marca);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => deleteMarca(marca.ID_Marca)}
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

export default MarcaScreen;
