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
const obtenerProductosPorCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoria } = req.query;
        const result = yield pool.query('SELECT * FROM productos WHERE categoria = $1', [categoria]);
        res.status(200).json({ message: 'Productos por Categoria', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const mostrarProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('SELECT * FROM productos');
        const data = result.rows;
        res.json(result);
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const buscarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre } = req.quer;
        const result = yield pool.query('SELECT * FROM productos WHERE nombre = $1', [nombre]);
        res.status(200).json({ message: 'Producto Econtrado con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const eliminarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.quer;
        const result = yield pool.query('DELETE FROM productos WHERE id = $1', [id]);
        res.status(200).json({ message: 'Producto Eliminado con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const cambiarNombreProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nuevoNombre } = req.quer;
        const result = yield pool.query('UPDATE productos SET nombre = $1 WHERE id = $2', [nuevoNombre, id]);
        res.status(200).json({ message: 'nombre del producto cambiado con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const cambiarPrecioProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nuevoPrecio } = req.quer;
        const result = yield pool.query('UPDATE productos SET precio = $1 WHERE id = $2', [nuevoPrecio, id]);
        res.status(200).json({ message: 'cambio de precio con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const cambiarDescripcionProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nuevaDescripcion } = req.quer;
        const result = yield pool.query('UPDATE productos SET descripcion = $1 WHERE id = $2', [nuevaDescripcion, id]);
        res.status(200).json({ message: 'cambio de descripcion con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const cambiarCantidadProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nuevaCantidad } = req.quer;
        const result = yield pool.query('UPDATE productos SET cantidad = $1 WHERE id = $2', [nuevaCantidad, id]);
        res.status(200).json({ message: 'cambio de cantidad con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const cambiarCategoriaProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nuevaCategoria } = req.quer;
        const result = yield pool.query('UPDATE productos SET categoria = $1 WHERE id = $2', [nuevaCategoria, id]);
        res.status(200).json({ message: 'cambio de categoria con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
const agregarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, precio, descripcion, cantidad, categoria } = req.quer;
        const result = yield pool.query('INSERT INTO productos (nombre, precio, descripcion, cantidad, categoria) VALUES ($1, $2, $3, $4, $5)', [nombre, precio, descripcion, cantidad, categoria]);
        res.status(200).json({ message: 'Producto agregado con éxito', data: result.rows });
    }
    catch (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).send('Error interno del servidor');
    }
});
module.exports =
    {
        obtenerProductosPorCategoria,
        mostrarProductos,
        buscarProducto,
        eliminarProducto,
        cambiarNombreProducto,
        cambiarPrecioProducto,
        cambiarDescripcionProducto,
        cambiarCantidadProducto,
        cambiarCategoriaProducto,
        agregarProducto
    };
