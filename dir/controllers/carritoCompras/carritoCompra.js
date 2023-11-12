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
exports.modificarCantidadProducto = exports.eliminarCarritoCompras = exports.agregarCarritoCompras = void 0;
const pool = require('../config');
const agregarCarritoCompras = (id_producto, id_usuario) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('INSERT INTO carritocompras (id_producto, id_usuario) VALUES ($1, $2)', [id_producto, id_usuario]);
        return result;
    }
    catch (error) {
        console.error(error);
    }
});
exports.agregarCarritoCompras = agregarCarritoCompras;
const eliminarCarritoCompras = (id_producto, id_usuario) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('DELETE FROM carritocompras WHERE id_producto = $1 and id_usuario = $2', [id_producto, id_usuario]);
        return result;
    }
    catch (error) {
        console.error(error);
    }
});
exports.eliminarCarritoCompras = eliminarCarritoCompras;
const modificarCantidadProducto = (id_producto, id_usuario, cantidadProducto) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query('UPDATE carritocompras SET cantidadproducto = $3 WHERE id_producto = $1 and id_producto = $2', [id_producto, id_usuario, cantidadProducto]);
        return result;
    }
    catch (error) {
        console.error(error);
    }
});
exports.modificarCantidadProducto = modificarCantidadProducto;
