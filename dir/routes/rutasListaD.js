"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const router = Router();
const { agregarProductoLD, eliminarProductosLD, mostrarProductosLD } = require('../controllers/lista_deseados');
const middlewares_1 = __importDefault(require("../controllers/middlewares"));
router.get('/api/listaD', middlewares_1.default.authGuard, mostrarProductosLD);
router.delete('/api/listaD', middlewares_1.default.authGuard, eliminarProductosLD);
router.put('/api/listaD', middlewares_1.default.authGuard, agregarProductoLD);
module.exports = router;
