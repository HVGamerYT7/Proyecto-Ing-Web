"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const router = Router();
const { obtenerUsuarios } = require('../controladores/usuarios');
router.get('/usuarios', obtenerUsuarios);
module.exports = router;
