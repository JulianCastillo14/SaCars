const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'viaduct.proxy.rlwy.net',
  user: 'root',
  password: '-acB6AD-GaA2haCHaH4G35DgDfBBBCGD',
  database: 'railway',
  port: 31993
})

module.exports = { pool };