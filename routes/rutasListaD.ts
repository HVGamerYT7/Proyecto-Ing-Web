const {Router} = require('express');
const router = Router();

const {agregarProductoLD,eliminarProductosLD,mostrarProductosLD} = require('../controllers/lista_deseados')
import middlewares from "../controllers/middlewares";


router.get('/api/listaD',middlewares.authGuard,mostrarProductosLD);
router.delete('/api/listaD',middlewares.authGuard,eliminarProductosLD);
router.put('/api/listaD',middlewares.authGuard,agregarProductoLD);

module.exports = router;