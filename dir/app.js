"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuarios_1 = require("./usuario/usuarios");
const express = require('express');
const pool = require('./config'); // Importa la configuración de conexión
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
//middlewares
//app.use(express.json());
//app.use(express.urlencoded({extended: false}));
//ruta
//app.use(require('./src/rutas/index'));
// Habilita el middleware cors para todas las rutas
// Obtener todas las preguntas
pool.connect();
//obtenerUsuarios();
(0, usuarios_1.buscarUsuario)('Usuario1');
server.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});
// Configurar Socket.io para escuchar conexiones de clientes
