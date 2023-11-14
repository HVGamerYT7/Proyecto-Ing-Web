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
const agregarCompra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto, id_usuario, fechacompra, cantidadproducto } = req.quer;
        const result = yield pool.query('INSERT INTO compras(id_producto, id_usuario, fechacompra, cantidadproducto) VALUES($1, $2, $3, $4)', [id_producto, id_usuario, fechacompra, cantidadproducto]);
        res.status(200).json({ message: 'compra agregada con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const eliminarCompra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto, id_usuario, fechacompra } = req.quer;
        const result = yield pool.query('INSERT INTO compras(id_producto, id_usuario, fechacompra, cantidadproducto) VALUES($1, $2, $3, $4)', [id_producto, id_usuario, fechacompra]);
        res.status(200).json({ message: 'compra eliminada con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const comprasRealizadas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_usuario } = req.quer;
        const result = yield pool.query('SELECT * FROM compras WHERE id_usuario = $1', [id_usuario]);
        res.status(200).json({ message: 'compras realizadas por el usuario', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
module.exports =
    {
        agregarCompra,
        eliminarCompra,
        comprasRealizadas
    };
