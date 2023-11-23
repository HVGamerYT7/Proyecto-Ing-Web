"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const router = Router();
const { agregarCarritoCompras, eliminarCarritoCompras, modificarCantidadProducto, mostrarCarrito } = require('../controllers/carritoCompra');
const middlewares_1 = __importDefault(require("../controllers/middlewares"));
router.get('/api/carrito', middlewares_1.default.authGuard, mostrarCarrito);
router.put('/api/carrito', middlewares_1.default.authGuard, agregarCarritoCompras);
router.post('/api/carrito', middlewares_1.default.authGuard, modificarCantidadProducto);
router.delete('/api/carrito', middlewares_1.default.authGuard, eliminarCarritoCompras);
module.exports = router;
