const {Router} = require('express');
const router = Router();

const {comprasRealizadas,agregarCompra,eliminarCompra} = require('../controllers/compras')


router.get('/api/compras',comprasRealizadas);
router.post('/api/compras',agregarCompra);
router.delete('api/compras',eliminarCompra);

module.exports = router;