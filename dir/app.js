"use strict";
const express = require('express');
const pool = require('./config'); // Importa la configuración de conexión
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
app.use(express.json());
// Habilita el middleware cors para todas las rutas
// Obtener todas las preguntas
server.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});
// Configurar Socket.io para escuchar conexiones de clientes
