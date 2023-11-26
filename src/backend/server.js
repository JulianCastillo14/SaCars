const express = require('express');
const cors = require('cors'); 
const { pool } = require("./db.js"); // Asegúrate de que el módulo db.js esté en el mismo directorio que este archivo o actualiza la ruta según sea necesario

const app = express();
const port = 4000;

app.use(cors()); // Usa cors como middleware
app.use(express.json());

app.get('/api/data', async (req, res) => {
    const result = await pool.query('SELECT * FROM Marca');
    console.log(result)
});


app.post('/login', async (req, res) => {
    console.log(req.body);
    const { usuarioOCorreo, contrasena } = req.body;
    const query = `
      SELECT Cliente.*, Tipo_Documento.Descripcion 
      FROM Cliente 
      INNER JOIN Tipo_Documento ON Cliente.ID_Tipo_Documento = Tipo_Documento.ID_Tipo_Documento 
      WHERE (Usuario = ? OR Correo = ?) AND Contraseña = ?
    `;
    
    try {
        const [rows, fields] = await pool.query(query, [usuarioOCorreo, usuarioOCorreo, contrasena]);
        if (rows.length > 0) {
            const userData = rows[0]; // asumiendo que el primer resultado contiene los datos del usuario
            console.log(userData)
            res.send({ success: true, message: 'Login exitoso', userData });
        } else {
            res.status(401).send({ success: false, message: 'Usuario, correo o contraseña incorrectos' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error al realizar la consulta' });
    }
});


app.listen(port, () => {
  console.log('Servidor escuchando en el puerto:', port);
});