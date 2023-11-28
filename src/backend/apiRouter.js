const express = require('express');
const router = express.Router();
const { pool } = require("./db.js"); 
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  logger: true,
  secureConnection: false,
  auth: {
    user: 'websacars@gmail.com',
    pass: 'adyq shfm omnr qavc'
  },
  tls:{
    rejectUnauthorized: true
  }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
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

// Recuperar contraseña
router.post('/forgot-password', async (req, res) => {
    const { usuarioOCorreo } = req.body;
    const query = `
      SELECT Cliente.*, Tipo_Documento.Descripcion 
      FROM Cliente 
      INNER JOIN Tipo_Documento ON Cliente.ID_Tipo_Documento = Tipo_Documento.ID_Tipo_Documento 
      WHERE Usuario = ? OR Correo = ?
    `;
    
    try {
      const [rows, fields] = await pool.query(query, [usuarioOCorreo, usuarioOCorreo]);
      if (rows.length > 0) {
        const userData = rows[0];
        
        // Genera una nueva contraseña aleatoria
        const newPassword = Math.random().toString(36).slice(-8);
        
        // Actualiza la contraseña en la base de datos
        const updateQuery = 'UPDATE Cliente SET Contraseña = ? WHERE Numero_Documento = ?';
        await pool.query(updateQuery, [newPassword, userData.Numero_Documento]);
        
        // Envía la nueva contraseña al correo electrónico del usuario
        let mailOptions = {
          from: 'websacars@gmail.com',
          to: userData.Correo,
          subject: 'Nueva contraseña',
          text: `Tu nueva contraseña es: ${newPassword}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        
        res.send({ success: true, message: 'Se ha enviado una nueva contraseña a tu correo electrónico registrado.' });
      } else {
        res.status(401).send({ success: false, message: 'Usuario o correo no encontrados' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Error al realizar la consulta' });
    }
});

// Crear una nueva marca
router.post('/marca', async (req, res) => {
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
router.get('/marca', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Marca');
        res.send({ success: true, data: rows });
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error al obtener las marcas' });
      }
});

// Actualizar una marca
router.put('/marca/:id', async (req, res) => {
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
router.delete('/marca/:id', async (req, res) => {
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
router.post('/color', async (req, res) => {
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
router.get('/color', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Color');
        res.send({ success: true, data: rows });
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error al obtener los colores' });
      }
});

// Actualizar un color
router.put('/color/:id', async (req, res) => {
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
router.delete('/color/:id', async (req, res) => {
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
router.post('/vehiculo', async (req, res) => {
    const { ID_Vehiculo, ID_Marca, Modelo, Descripcion, Anio, ID_Color, Kilometraje, Tipo_Combustible, Precio } = req.body;
    try {
      const result = await pool.query('INSERT INTO Vehiculo (ID_Vehiculo, ID_Marca, Modelo, Descripcion, Anio, ID_Color, Kilometraje, Tipo_Combustible, Precio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [ID_Vehiculo, ID_Marca, Modelo, Descripcion, Anio, ID_Color, Kilometraje, Tipo_Combustible, Precio]);
      res.status(201).send({ success: true, message: 'Vehiculo creado exitosamente' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Error al crear el vehiculo' });
    }
});

//Leer todos los vehiculos
router.get('/vehiculo', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT Vehiculo.*, Marca.Nombre_Marca, Color.Nombre_Color FROM Vehiculo INNER JOIN Marca ON Vehiculo.ID_Marca = Marca.ID_Marca INNER JOIN Color ON Vehiculo.ID_Color = Color.ID_Color');
    res.send({ success: true, data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al obtener los vehiculos' });
  }
});

// Actualizar un vehiculo
router.put('/vehiculo/:id', async (req, res) => {
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
router.delete('/vehiculo/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM Vehiculo WHERE ID_Vehiculo = ?', [id]);
    res.send({ success: true, message: 'Vehiculo eliminado exitosamente' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error al eliminar el vehiculo' });
  }
});

// Consultar Tipos de documentos
router.get('/tipo_documento', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Tipo_Documento');
        res.send({ success: true, data: rows });
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error al obtener los tipos de documento' });
      }
});

// Crear un nuevo cliente
router.post('/cliente', async (req, res) => {
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
router.get('/cliente', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT Cliente.*, Tipo_Documento.Descripcion FROM Cliente INNER JOIN Tipo_Documento ON Cliente.ID_Tipo_Documento = Tipo_Documento.ID_Tipo_Documento');
        res.send({ success: true, data: rows });
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error al obtener los clientes' });
      }
});

// Actualizar un cliente
router.put('/cliente/:id', async (req, res) => {
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
router.delete('/cliente/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('DELETE FROM Cliente WHERE Numero_Documento = ?', [id]);
      res.send({ success: true, message: 'Cliente eliminado exitosamente' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Error al eliminar el cliente' });
    }
});

// Crear una nueva cotización
router.post('/cotizacion', async (req, res) => {
    const { ID_Cotizacion, ID_Vehiculo, Numero_Documento, Fecha } = req.body;
    try {
      const result = await pool.query('INSERT INTO Cotizacion_Cliente (ID_Cotizacion, ID_Vehiculo, Numero_Documento, Fecha) VALUES (?, ?, ?, ?)', [ID_Cotizacion, ID_Vehiculo, Numero_Documento, Fecha]);
      res.status(201).send({ success: true, message: 'Cotización creada exitosamente' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Error al crear la cotización' });
    }
});

// Leer todas las cotizaciones
router.get('/cotizacion', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM Cotizacion_Cliente');
        res.send({ success: true, data: rows });
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Error al obtener las cotizaciones' });
      }
});

// Actualizar una cotización
router.put('/cotizacion/:id', async (req, res) => {
    const { ID_Vehiculo, Numero_Documento, Fecha } = req.body;
    const { id } = req.params;
    try {
      const result = await pool.query('UPDATE Cotizacion_Cliente SET ID_Vehiculo = ?, Numero_Documento = ?, Fecha = ? WHERE ID_Cotizacion = ?', [ID_Vehiculo, Numero_Documento, Fecha, id]);
      res.send({ success: true, message: 'Cotización actualizada exitosamente' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Error al actualizar la cotización' });
    }
});

// Eliminar una cotización
router.delete('/cotizacion/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('DELETE FROM Cotizacion_Cliente WHERE ID_Cotizacion = ?', [id]);
      res.send({ success: true, message: 'Cotización eliminada exitosamente' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Error al eliminar la cotización' });
    }
});

module.exports = router;
