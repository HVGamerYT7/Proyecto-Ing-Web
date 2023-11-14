const {Router} = require('express');
const router = Router();

const {mostrarProductos,obtenerProductosPorCategoria,buscarProducto,eliminarProducto,cambiarNombreProducto,cambiarPrecioProducto,cambiarDescripcionProducto,cambiarCantidadProducto,cambiarCategoriaProducto,agregarProducto} = require('../controllers/producto')


router.get('/api/productos',mostrarProductos);
router.get('api/productos',obtenerProductosPorCategoria);
router.get('/api/productos',buscarProducto);
router.put('api/productos',agregarProducto);
router.delete('/api/productos',eliminarProducto);
router.post('/api/productos',cambiarNombreProducto);
router.post('/api/productos',cambiarPrecioProducto);
router.post('/api/productos',cambiarDescripcionProducto);
router.post('/api/productos',cambiarCantidadProducto);
router.post('/api/productos',cambiarCategoriaProducto);

module.exports = router;