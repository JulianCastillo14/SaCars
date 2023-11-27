import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MásInfromacion.css'

const ExitSingInIcon = () => (
    <svg className='icon-movil' xmlns="http://www.w3.org/2000/svg" width="4vw" height="4vh" viewBox="0 0 256 256">
      <path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/>
    </svg>
);

const MasInformacion = ({ descripcion, onClose }) => {
    const [form, setForm] = useState({
        nombreCompleto: '',
        numeroDocumento: '',
        tipoDocumento: '',
        celular: '',
        correoElectronico: ''
    });

    const [tiposDocumento, setTiposDocumento] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/tipo_documento')
            .then(response => {
                setTiposDocumento(response.data.data);
            })
            .catch(error => {
                console.error('Error al obtener los tipos de documento:', error);
            });
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí se va a manejar el envío del formulario
        console.log(form);

        // Obtener todos los vehículos de la API
        const response = await axios.get('http://localhost:4000/api/vehiculo');
        console.log(response.data);

        // Asegúrate de que response.data.data es un array antes de usar find en él
        if (Array.isArray(response.data.data)) {
            // Busca en los vehículos el que coincide con la descripción
            const vehiculo = response.data.data.find(v => v.Descripcion === descripcion);

            // Si encontraste un vehículo que coincide, usa su ID
            if (vehiculo) {
            form.ID_Vehiculo = vehiculo.ID_Vehiculo;
            }
        }

        // Crear la cotización
        const cotizacion = {
            ID_Cotizacion: form.ID_Cotizacion,
            ID_Vehiculo: form.ID_Vehiculo,
            Numero_Documento: form.numeroDocumento,
            Fecha: new Date().toISOString().slice(0, 19).replace('T', ' ')
        };

        // Enviar la cotización a la API
        axios.post('http://localhost:4000/api/cotizacion', cotizacion)
        .then(response => {
            console.log(response);
            onClose(); 
            alert('Tu solicitud ha sido enviada con éxito. Pronto nos comunicaremos contigo.');
        })
        .catch(error => {
            console.error('Error al crear la cotización:', error);
            alert('No se pudo crear la solicitud porque el cliente no está registrado. Por favor, regístrate en el sitio web Sacars');
        
        });
    }

    const [isVisible] = useState(true);

    return isVisible ? (
        <div className="container-masInfo">
            <div>
                <div id='exit' onClick={onClose}>
                    <ExitSingInIcon/>
                </div>
                <form id='formulario-masInfo' onSubmit={handleSubmit}>
                    <h2 id='titulo-form'>Ingresa los siguientes datos para contactarte:</h2>
                    <label htmlFor="nombreCompleto">Nombre completo</label>
                    <input className="masInfo-input" type="text" name="nombreCompleto" onChange={handleChange} />
                    <label htmlFor="numeroDocumento">Número de documento</label>
                    <input className="masInfo-input" type="text" name="numeroDocumento" onChange={handleChange} />
                    <label htmlFor="tipoDocumento">Tipo de documento</label>
                    <select value={form.ID_Tipo_Documento} className="masInfo-input" name="tipoDocumento" onChange={handleChange}>
                        <option value="" disabled selected>Selecciona un tipo de documento</option>
                        {tiposDocumento.map((tipo) => (
                            <option key={tipo.ID_Tipo_Documento} value={tipo.ID_Tipo_Documento}>
                                {tipo.Descripcion}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="celular">Celular</label>
                    <input className="masInfo-input" type="text" name="celular"  onChange={handleChange} />
                    <label htmlFor="correoElectronico">Correo electrónico</label>
                    <input className="masInfo-input" type="email" name="correoElectronico" onChange={handleChange} />
                    <h4 id='descripcion-v'>Detalle del vehiculo</h4>
                    <p id='des'>{descripcion}</p>
                    <button id='btn-enviar' type="submit">Enviar</button>
                </form>
            </div>
        </div>
    ): null;
}

export default MasInformacion
