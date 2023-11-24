const {Router} = require('express');
const router = Router();

const {obtenerUsuarios, buscarUsuario,eliminarUsuario,cambiarNombreUsuario,cambiarCorreo,cambiarContrasena,iniciarSesion,crearCuenta} = require('../controllers/usuarios')
import { verifyToken } from '../controllers/middlewares';

router.get('/api/usuarios',verifyToken,obtenerUsuarios);
router.post('/api/usuarios',verifyToken,buscarUsuario);
router.delete('/api/usuarios',verifyToken,eliminarUsuario);
router.post('/api/cambiarNombre',verifyToken,cambiarNombreUsuario);
router.post('/api/cambiarCorreo',verifyToken,cambiarCorreo);
router.post('/api/cambiarContrasenia',verifyToken,cambiarContrasena);
router.post('/api/login',iniciarSesion);
router.post('/api/registro',crearCuenta);

module.exports = router;