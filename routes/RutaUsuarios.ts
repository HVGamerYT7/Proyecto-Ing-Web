const {Router} = require('express');
const router = Router();

const {obtenerUsuarios, buscarUsuario,eliminarUsuario,cambiarNombreUsuario,cambiarCorreo,cambiarContrasena,iniciarSesion} = require('../controllers/usuarios')
import middlewares from "../controllers/middlewares";

router.get('/api/usuarios',obtenerUsuarios);
router.post('/api/usuarios',buscarUsuario);
router.delete('/api/usuarios',middlewares.authGuard,eliminarUsuario);
router.post('/api/cambiarNombre',middlewares.authGuard,cambiarNombreUsuario);
router.post('/api/cambiarCorreo',middlewares.authGuard,cambiarCorreo);
router.post('/api/cambiarContrasenia',middlewares.authGuard,cambiarContrasena);
router.post('/api/login',iniciarSesion);
router.post('/api/registro',);

module.exports = router;