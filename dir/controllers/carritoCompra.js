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
const agregarCarritoCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto, id_usuario } = req.quer;
        const result = yield pool.query('INSERT INTO carritocompras (id_producto, id_usuario) VALUES ($1, $2)', [id_producto, id_usuario]);
        res.status(200).json({ message: 'Productos por Categoria', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const eliminarCarritoCompras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto, id_usuario } = req.quer;
        const result = yield pool.query('DELETE FROM carritocompras WHERE id_producto = $1 and id_usuario = $2', [id_producto, id_usuario]);
        res.status(200).json({ message: 'Productos por Categoria', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const modificarCantidadProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto, id_usuario, cantidadProductos } = req.quer;
        const result = yield pool.query('UPDATE carritocompras SET cantidadproducto = $3 WHERE id_producto = $1 and id_producto = $2', [id_producto, id_usuario, cantidadProductos]);
        return result;
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const mostrarCarrito = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_usuario } = req.query;
        const result = yield pool.query('SELECT * FROM usuarios inner join carritocompras on usuarios.id = carritocompras.id_usuario inner join productos on carritocompras.idproducto = productos.id WHERE id_usuario = $1', [id_usuario]);
        res.status(200).json({ message: 'Carrito de compras', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
module.exports =
    {
        agregarCarritoCompras,
        eliminarCarritoCompras,
        modificarCantidadProducto,
        mostrarCarrito
    };
