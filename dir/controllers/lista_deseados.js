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
const eliminarProductosLD = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto, id_usuario } = req.quer;
        const resul = yield pool.query('DELETE FROM listaDeseados WHERE id_usuario = $1 AND id_producto = $2', [id_usuario, id_producto]);
        const data = resul.rows;
        resul.json(data);
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const agregarProductoLD = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto, id_usuario } = req.quer;
        const resul = yield pool.query('INSERT INTO listaDeseados id_producto = $1, id_usuario = $2', [id_producto, id_usuario]);
        const data = resul.rows;
        resul.json(data);
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const mostrarProductosLD = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_usuario } = req.quer;
        const resul = yield pool.query('SELECT * FROM listaDeseados WHERE id_usuario = $1', [id_usuario]);
        const data = resul.rows;
        resul.json(data);
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
module.exports =
    {
        eliminarProductosLD,
        agregarProductoLD,
        mostrarProductosLD
    };
