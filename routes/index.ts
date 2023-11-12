const {Router} = require('express');
const router = Router();
const { obtenerUsuarios } = require('../controllers/usuario/usuarios');


router.get('/usuarios',obtenerUsuarios);

module.exports = router;