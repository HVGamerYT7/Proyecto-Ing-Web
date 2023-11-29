"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const pool = require('../config');
const obtenerPreguntaAleatoria = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const preguntaQuery = `
            SELECT pregunta
            FROM trivias
            ORDER BY RANDOM()
            LIMIT 1;
        `;
        const preguntaResult = yield pool.query(preguntaQuery);
        const pregunta = preguntaResult.rows[0].pregunta;
        const respuestasQuery = `
            SELECT respuesta
            FROM respuestas
            WHERE id_trivia = (SELECT id_trivia FROM trivias WHERE pregunta = $1);
        `;
        const respuestasResult = yield pool.query(respuestasQuery, [pregunta]);
        const respuestas = respuestasResult.rows.map((row) => row.respuesta);
        return { pregunta, respuestas };
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        throw new Error('Error interno del servidor');
    }
});
const mostrarPreguntaYRespuestas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pregunta, respuestas } = yield obtenerPreguntaAleatoria();
        res.status(200).json({ pregunta, respuestas });
    }
    catch (error) {
        console.error('Error al obtener la pregunta y respuestas:', error);
        res.status(500).send('Error interno del servidor');
    }
});
module.exports =
    {
        mostrarPreguntaYRespuestas
    };
