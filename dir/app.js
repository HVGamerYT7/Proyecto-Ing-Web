"use strict";
const express = require('express');
const pool = require('./config'); // Importa la configuración de conexión
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
//middlewares
app.use(express.json()); // para que entienda el formato json
app.use(express.urlencoded({ extended: false })); // para que entienda los datos que vienen de un formulario html 
//rutas
app.use(require('./routes/index'));
app.listen(3000);
console.log('Servidor corriendo en puerto 3000');
// Habilita el middleware cors para todas las rutas
// Obtener todas las preguntas
//pool.connect();
//
////obtenerUsuarios();
////buscarUsuario('Usuario1');
//
//
//server.listen(port, () => {
//  console.log(`La aplicación está escuchando en el puerto ${port}`);
//});
// Configurar Socket.io para escuchar conexiones de clientes
