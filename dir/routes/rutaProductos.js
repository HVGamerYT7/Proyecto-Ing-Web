"use strict";
const { Router } = require('express');
const router = Router();
const { mostrarProductos, obtenerProductosPorCategoria, buscarProducto, eliminarProducto, cambiarNombreProducto, cambiarPrecioProducto, cambiarDescripcionProducto, cambiarCantidadProducto, cambiarCategoriaProducto, agregarProducto } = require('../controllers/producto');
// No aplica verifyToken a la ruta '/api/productos'
router.get('/api/productos', mostrarProductos);
// Aplica verifyToken solo a especificadas
router.post('api/prodCat', obtenerProductosPorCategoria);
router.post('/api/prodBus', buscarProducto);
router.put('api/prodAgr', agregarProducto);
router.delete('/api/prodEli', eliminarProducto);
router.post('/api/prodNom', cambiarNombreProducto);
router.post('/api/prodPrec', cambiarPrecioProducto);
router.post('/api/prodDescr', cambiarDescripcionProducto);
router.post('/api/prodCant', cambiarCantidadProducto);
router.post('/api/prodCamCat', cambiarCategoriaProducto);
// ... y así sucesivamente para las otras rutas
module.exports = router;
