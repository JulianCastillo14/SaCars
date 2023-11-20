const mysql = require('mysql2/promise');

const {DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT} = require('./config')

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT
})

module.exports = { pool };