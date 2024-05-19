const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'sacars-container-db',
  user: 'root',
  password: '1423',
  database: 'dbSacars',
  port: 3306
})

module.exports = { pool };