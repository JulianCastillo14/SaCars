const express = require('express');
const app = express();
const {pool} = require("./db.js")

app.get('/api/data', async (req, res) => {
    const result = await pool.query('SELECT * FROM Marca');
    console.log(result)
});

app.listen(3000)
console.log('Servidor escuchando en el puerto:', 3000)