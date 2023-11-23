const {Router} = require('express');
const router = Router();

const {agregarCarritoCompras,eliminarCarritoCompras,modificarCantidadProducto,mostrarCarrito} = require('../controllers/carritoCompra')
import middlewares from "../controllers/middlewares";


router.get('/api/carrito',middlewares.authGuard,mostrarCarrito);
router.put('/api/carrito',middlewares.authGuard,agregarCarritoCompras);
router.post('/api/carrito',middlewares.authGuard,modificarCantidadProducto);
router.delete('/api/carrito',middlewares.authGuard,eliminarCarritoCompras);

module.exports = router;