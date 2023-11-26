"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
app.use(require('./routes/RutaUsuarios'));
app.use(require('./routes/rutaProductos'));
app.use(require('./routes/rutasListaD'));
app.use(require('./routes/rutasCarrito'));
app.use(require('./routes/rutaCompra'));
//app.listen(port);
//console.log('Servidor corriendo en puerto 3000');
/*app.get('/api/usuarios', async (req:any, res:any) => {
    try {
      const result = await pool.query('SELECT * FROM usuarios');
      const data = result.rows;
      res.json(data);
    } catch (error) {
      console.error('Error al realizar la consulta:', error);
      res.status(500).send('Error interno del servidor');
    }
  });

app.put('/api/usuarios', async (req:any, res:any) => {
  try{
    const { nuevoNombre, id } = req.query;
    const result = await pool.query('UPDATE usuarios SET nombre = $1 WHERE id = $2', [nuevoNombre, id]);
    res.status(200).json({ message: 'Usuario actualizado con éxito', data: result.rows });
  }
  catch(error){
    console.error('Error al realizar la consulta:', error);
    res.status(500).send('Error interno del servidor');
  }
});*/
// Habilita el middleware cors para todas las rutas
// Obtener todas las preguntas
pool.connect();
//
///obtenerUsuarios();
///buscarUsuario('Usuario1');
//
//
server.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});
// Configurar Socket.io para escuchar conexiones de clientes
