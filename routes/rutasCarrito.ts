const {Router} = require('express');
const router = Router();

const {agregarCarritoCompras,eliminarCarritoCompras,modificarCantidadProducto,mostrarCarrito} = require('../controllers/carritoCompra');


router.get('/api/carrito',mostrarCarrito);
router.put('/api/carrito',agregarCarritoCompras);
router.post('/api/carrito',modificarCantidadProducto);
router.delete('/api/carrito',eliminarCarritoCompras);

module.exports = router;