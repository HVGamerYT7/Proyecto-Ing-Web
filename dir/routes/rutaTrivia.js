"use strict";
const { Router } = require('express');
const router = Router();
const { mostrarPreguntaYRespuestas } = require('../controllers/trivia');
router.get('/api/preguntayrespuestas', mostrarPreguntaYRespuestas);
module.exports = router;
