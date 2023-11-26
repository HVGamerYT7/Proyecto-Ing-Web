const {Router} = require('express');
const express = require('express');
const cookieParser = require('cookie-parser');
const { verifyToken } = require('../controllers/middlewares');
const {
  obtenerUsuarios,
  buscarUsuario,
  eliminarUsuario,
  cambiarNombreUsuario,
  cambiarCorreo,
  cambiarContrasena,
  iniciarSesion,
  crearCuenta
} = require('../controllers/usuarios');

const router = express.Router();

// Aplica middleware para parsear cookies antes de verifyToken
router.use(cookieParser());
//
//// Aplica middleware verifyToken a todas las rutas excepto iniciarSesion y crearCuenta
router.use((req:any, res:any, next:any) => {
  if (req.path === '/api/login' || req.path === '/api/registro'|| req.path === '/api/productos' || req.path==='api/prodCat' || req.path==='/api/prodBus' || req.path === 'api/prodCat') {
    // Si la ruta es iniciarSesion o crearCuenta, pasa al siguiente middleware sin verificar el token
    return next();
  }

  // Para otras rutas, aplica el middleware verifyToken
  verifyToken(req, res, next);
});

router.get('/api/usuarios', obtenerUsuarios);
router.post('/api/usuarios', buscarUsuario);
router.delete('/api/usuarios', eliminarUsuario);
router.post('/api/cambiarNombre', cambiarNombreUsuario);
router.post('/api/cambiarCorreo', cambiarCorreo);
router.post('/api/cambiarContrasenia', cambiarContrasena);
router.post('/api/login', iniciarSesion);
router.post('/api/registro', crearCuenta);

module.exports = router;
