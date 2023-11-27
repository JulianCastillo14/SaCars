const express = require('express');
const cors = require('cors'); 
const { pool } = require("./db.js"); 
const app = express();
const port = 4000;
const nodemailer = require('nodemailer');
const apiRouter = require('./apiRouter.js'); 

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

// Configura el transporte de correo
let transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  logger: true,
  secureConnection: false,
  auth: {
    user: 'websacars@gmail.com',
    pass: 'qams cmtc atmg zfts'
  },
  tls:{
    rejectUnauthorized: true
  }
});

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log('Servidor escuchando en el puerto:', port);
});
