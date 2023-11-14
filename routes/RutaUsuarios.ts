const {Router} = require('express');
const router = Router();

const {obtenerUsuarios, buscarUsuario,eliminarUsuario,cambiarNombreUsuario,cambiarCorreo,cambiarContrasena,verificarCredenciales} = require('../controllers/usuarios')


router.get('/api/usuarios',obtenerUsuarios);
router.get('/api/usuarios',buscarUsuario);
router.delete('/api/usuarios',eliminarUsuario);
router.post('/api/usuarios',cambiarNombreUsuario);
router.post('/api/usuarios',cambiarCorreo);
router.post('/api/usuarios',cambiarContrasena);
router.get('/api/usuarios',verificarCredenciales);


module.exports = router;