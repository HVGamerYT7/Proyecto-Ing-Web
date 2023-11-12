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
Object.defineProperty(exports, "__esModule", { value: true });
exports.cambiarCategoriaProducto = exports.cambiarCantidadProducto = exports.eliminarProducto = exports.buscarProducto = exports.obtenerProductosPorCategoria = void 0;
const pool = require('../config');
const obtenerProductosPorCategoria = (categoria) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('SELECT * FROM productos WHERE categoria = $1', [categoria]);
        return result.rows;
    }
    catch (error) {
        console.error(error);
    }
});
exports.obtenerProductosPorCategoria = obtenerProductosPorCategoria;
const buscarProducto = (nombre) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('SELECT * FROM productos WHERE nombre = $1', [nombre]);
        return result.rows;
    }
    catch (error) {
        console.error(error);
    }
});
exports.buscarProducto = buscarProducto;
const eliminarProducto = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('DELETE FROM productos WHERE id = $1', [id]);
        return result.rowCount;
    }
    catch (error) {
        console.error(error);
    }
});
exports.eliminarProducto = eliminarProducto;
const cambiarNombreProducto = (id, nuevoNombre) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('UPDATE productos SET nombre = $1 WHERE id = $2', [nuevoNombre, id]);
        return result.rowCount;
    }
    catch (error) {
        console.error(error);
    }
});
const cambiarPrecioProducto = (id, nuevoPrecio) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('UPDATE productos SET precio = $1 WHERE id = $2', [nuevoPrecio, id]);
        return result.rowCount;
    }
    catch (error) {
        console.error(error);
    }
});
const cambiarDescripcionProducto = (id, nuevaDescripcion) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('UPDATE productos SET descripcion = $1 WHERE id = $2', [nuevaDescripcion, id]);
        return result.rowCount;
    }
    catch (error) {
        console.error(error);
    }
});
const cambiarCantidadProducto = (id, nuevaCantidad) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('UPDATE productos SET cantidad = $1 WHERE id = $2', [nuevaCantidad, id]);
        return result.rowCount;
    }
    catch (error) {
        console.error(error);
    }
});
exports.cambiarCantidadProducto = cambiarCantidadProducto;
const cambiarCategoriaProducto = (id, nuevaCategoria) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('UPDATE productos SET categoria = $1 WHERE id = $2', [nuevaCategoria, id]);
        return result.rowCount;
    }
    catch (error) {
        console.error(error);
    }
});
exports.cambiarCategoriaProducto = cambiarCategoriaProducto;
