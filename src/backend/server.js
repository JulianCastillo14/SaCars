const express = require('express');
const cors = require('cors'); 
const { pool } = require("./db.js"); // Asegúrate de que el módulo db.js esté en el mismo directorio que este archivo o actualiza la ruta según sea necesario

const app = express();
const port = 4000;

app.use(cors()); // Usa cors como middleware
app.use(express.json());

const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 60000 } // Configura según tus necesidades
}));

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

// Crear una nueva marca
app.post('/api/marca', async (req, res) => {
  const { ID_Marca, Nombre_Marca } = req.body;
  try {
    const result = await pool.query('INSERT INTO Marca (ID_Marca, Nombre_Marca) VALUES (?, ?)', [ID_Marca, Nombre_Marca]);
    res.status(201).send({ success: true, message: 'Marca creada exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al crear la marca' });
  }
});

// Leer todas las marcas
app.get('/api/marca', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM Marca');
    res.send({ success: true, data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al obtener las marcas' });
  }
});

// Actualizar una marca
app.put('/api/marca/:id', async (req, res) => {
  const { Nombre_Marca } = req.body;
  const { id } = req.params;
  try {
    const result = await pool.query('UPDATE Marca SET Nombre_Marca = ? WHERE ID_Marca = ?', [Nombre_Marca, id]);
    res.send({ success: true, message: 'Marca actualizada exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al actualizar la marca' });
  }
});

// Eliminar una marca
app.delete('/api/marca/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM Marca WHERE ID_Marca = ?', [id]);
    res.send({ success: true, message: 'Marca eliminada exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al eliminar la marca' });
  }
});

// Crear un nuevo color
app.post('/api/color', async (req, res) => {
  const { ID_Color, Nombre_Color } = req.body;
  try {
    const result = await pool.query('INSERT INTO Color (ID_Color, Nombre_Color) VALUES (?, ?)', [ID_Color, Nombre_Color]);
    res.status(201).send({ success: true, message: 'Color creado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al crear el color' });
  }
});

// Leer todos los colores
app.get('/api/color', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM Color');
    res.send({ success: true, data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al obtener los colores' });
  }
});

// Actualizar un color
app.put('/api/color/:id', async (req, res) => {
  const { Nombre_Color } = req.body;
  const { id } = req.params;
  try {
    const result = await pool.query('UPDATE Color SET Nombre_Color = ? WHERE ID_Color = ?', [Nombre_Color, id]);
    res.send({ success: true, message: 'Color actualizado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al actualizar el color' });
  }
});

// Eliminar un color
app.delete('/api/color/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM Color WHERE ID_Color = ?', [id]);
    res.send({ success: true, message: 'Color eliminado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al eliminar el color' });
  }
});

// Crear un nuevo vehiculo
app.post('/api/vehiculo', async (req, res) => {
  const { ID_Vehiculo, ID_Marca, Modelo, Descripcion, Anio, ID_Color, Kilometraje, Tipo_Combustible, Precio } = req.body;
  try {
    const result = await pool.query('INSERT INTO Vehiculo (ID_Vehiculo, ID_Marca, Modelo, Descripcion, Anio, ID_Color, Kilometraje, Tipo_Combustible, Precio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [ID_Vehiculo, ID_Marca, Modelo, Descripcion, Anio, ID_Color, Kilometraje, Tipo_Combustible, Precio]);
    res.status(201).send({ success: true, message: 'Vehiculo creado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al crear el vehiculo' });
  }
});

// Leer todos los vehiculos
app.get('/api/vehiculo', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT Vehiculo.*, Marca.Nombre_Marca, Color.Nombre_Color FROM Vehiculo INNER JOIN Marca ON Vehiculo.ID_Marca = Marca.ID_Marca INNER JOIN Color ON Vehiculo.ID_Color = Color.ID_Color');
    res.send({ success: true, data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al obtener los vehiculos' });
  }
});

// Actualizar un vehiculo
app.put('/api/vehiculo/:id', async (req, res) => {
  const { ID_Marca, Modelo, Descripcion, Anio, ID_Color, Kilometraje, Tipo_Combustible, Precio } = req.body;
  const { id } = req.params;
  try {
    const result = await pool.query('UPDATE Vehiculo SET ID_Marca = ?, Modelo = ?, Descripcion = ?, Anio = ?, ID_Color = ?, Kilometraje = ?, Tipo_Combustible = ?, Precio = ? WHERE ID_Vehiculo = ?', [ID_Marca, Modelo, Descripcion, Anio, ID_Color, Kilometraje, Tipo_Combustible, Precio, id]);
    res.send({ success: true, message: 'Vehiculo actualizado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al actualizar el vehiculo' });
  }
});

// Eliminar un vehiculo
app.delete('/api/vehiculo/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM Vehiculo WHERE ID_Vehiculo = ?', [id]);
    res.send({ success: true, message: 'Vehiculo eliminado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al eliminar el vehiculo' });
  }
});

//Consultar Tipos de documentos
app.get('/api/tipo_documento', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM Tipo_Documento');
    res.send({ success: true, data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al obtener los tipos de documento' });
  }
});


// Crear un nuevo cliente
app.post('/api/cliente', async (req, res) => {
  const { Numero_Documento, ID_Tipo_Documento, Nombre_Completo, Fecha_Nacimiento, Celular, Correo, Usuario, Contraseña } = req.body;
  try {
    const result = await pool.query('INSERT INTO Cliente (Numero_Documento, ID_Tipo_Documento, Nombre_Completo, Fecha_Nacimiento, Celular, Correo, Usuario, Contraseña) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [Numero_Documento, ID_Tipo_Documento, Nombre_Completo, Fecha_Nacimiento, Celular, Correo, Usuario, Contraseña]);
    res.status(201).send({ success: true, message: 'Cliente creado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al crear el cliente' });
  }
});

// Leer todos los clientes
app.get('/api/cliente', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT Cliente.*, Tipo_Documento.Descripcion FROM Cliente INNER JOIN Tipo_Documento ON Cliente.ID_Tipo_Documento = Tipo_Documento.ID_Tipo_Documento');
    res.send({ success: true, data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al obtener los clientes' });
  }
});


// Actualizar un cliente
app.put('/api/cliente/:id', async (req, res) => {
  const { ID_Tipo_Documento, Nombre_Completo, Fecha_Nacimiento, Celular, Correo, Usuario, Contraseña } = req.body;
  const { id } = req.params;
  try {
    const result = await pool.query('UPDATE Cliente SET ID_Tipo_Documento = ?, Nombre_Completo = ?, Fecha_Nacimiento = ?, Celular = ?, Correo = ?, Usuario = ?, Contraseña = ? WHERE Numero_Documento = ?', [ID_Tipo_Documento, Nombre_Completo, Fecha_Nacimiento, Celular, Correo, Usuario, Contraseña, id]);
    res.send({ success: true, message: 'Cliente actualizado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al actualizar el cliente' });
  }
});

// Eliminar un cliente
app.delete('/api/cliente/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM Cliente WHERE Numero_Documento = ?', [id]);
    res.send({ success: true, message: 'Cliente eliminado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al eliminar el cliente' });
  }
});


app.listen(port, () => {
  console.log('Servidor escuchando en el puerto:', port);
});