"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const router = Router();
const { obtenerUsuarios, buscarUsuario, eliminarUsuario, cambiarNombreUsuario, cambiarCorreo, cambiarContrasena, iniciarSesion } = require('../controllers/usuarios');
const middlewares_1 = __importDefault(require("../controllers/middlewares"));
router.get('/api/usuarios', obtenerUsuarios);
router.post('/api/usuarios', buscarUsuario);
router.delete('/api/usuarios', middlewares_1.default.authGuard, eliminarUsuario);
router.post('/api/cambiarNombre', middlewares_1.default.authGuard, cambiarNombreUsuario);
router.post('/api/cambiarCorreo', middlewares_1.default.authGuard, cambiarCorreo);
router.post('/api/cambiarContrasenia', middlewares_1.default.authGuard, cambiarContrasena);
router.post('/api/login', iniciarSesion);
router.post('/api/registro');
module.exports = router;
