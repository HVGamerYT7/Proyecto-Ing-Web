const {Router} = require('express');
const router = Router();

const {comprasRealizadas,agregarCompra,eliminarCompra} = require('../controllers/compras')
import middlewares from "../controllers/middlewares";


router.get('/api/compras',middlewares.authGuard,comprasRealizadas);
router.post('/api/compras',middlewares.authGuard,agregarCompra);
router.delete('api/compras',middlewares.authGuard,eliminarCompra);

module.exports = router;