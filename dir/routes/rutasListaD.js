"use strict";
const { Router } = require('express');
const router = Router();
const { agregarProductoLD, eliminarProductosLD, mostrarProductosLD } = require('../controllers/lista_deseados');
router.get('/api/listaD', mostrarProductosLD);
router.delete('/api/listaD', eliminarProductosLD);
router.put('/api/listaD', agregarProductoLD);
module.exports = router;
