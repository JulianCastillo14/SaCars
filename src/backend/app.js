const express = require('express');
const app = express();
const {pool} = require("./db.js")
const port = 3000

app.get('/api/data', async (req, res) => {
    const result = await pool.query('SELECT * FROM Marca');
    console.log(result)
});

app.listen(port)
console.log('Servidor escuchando en el puerto:', port)