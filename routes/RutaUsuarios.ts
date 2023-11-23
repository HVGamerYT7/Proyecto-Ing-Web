const {Router} = require('express');
const router = Router();

const {obtenerUsuarios, buscarUsuario,eliminarUsuario,cambiarNombreUsuario,cambiarCorreo,cambiarContrasena,iniciarSesion,crearCuenta} = require('../controllers/usuarios')
//import middlewares from "../controllers/middlewares";

router.get('/api/usuarios',obtenerUsuarios);
router.post('/api/usuarios',buscarUsuario);
router.delete('/api/usuarios',eliminarUsuario);
router.post('/api/cambiarNombre',cambiarNombreUsuario);
router.post('/api/cambiarCorreo',cambiarCorreo);
router.post('/api/cambiarContrasenia',cambiarContrasena);
router.post('/api/login',iniciarSesion);
router.post('/api/registro',crearCuenta);

module.exports = router;