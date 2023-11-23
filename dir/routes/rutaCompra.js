"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const router = Router();
const { comprasRealizadas, agregarCompra, eliminarCompra } = require('../controllers/compras');
const middlewares_1 = __importDefault(require("../controllers/middlewares"));
router.get('/api/compras', middlewares_1.default.authGuard, comprasRealizadas);
router.post('/api/compras', middlewares_1.default.authGuard, agregarCompra);
router.delete('api/compras', middlewares_1.default.authGuard, eliminarCompra);
module.exports = router;
