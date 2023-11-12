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
exports.agregarProductoLD = exports.eliminarProductosLD = void 0;
const pool = require('../config');
const eliminarProductosLD = (id_producto, id_usuario) => __awaiter(void 0, void 0, void 0, function* () {
    pool.query(`DELETE FROM listaDeseados INNER JOIN productos ON listaDeseados.id_producto = productos.id WHERE listaDeseados.id_usuario = '${id_usuario}' AND productos.id = '${id_producto}'`, (error, results) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log(`Producto con id ${id_producto} eliminado exitosamente de la lista de deseos del usuario con id ${id_usuario}`);
        }
        pool.end();
    });
});
exports.eliminarProductosLD = eliminarProductosLD;
const agregarProductoLD = (id_producto, id_usuario) => __awaiter(void 0, void 0, void 0, function* () {
    pool.query(`INSERT INTO listaDeseados (id_usuario, id_producto) VALUES ('${id_usuario}', '${id_producto}')`, (error, results) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log(`Producto con id ${id_producto} agregado exitosamente a la lista de deseos del usuario con id ${id_usuario}`);
        }
        pool.end();
    });
});
exports.agregarProductoLD = agregarProductoLD;
