"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarCompra = exports.agregarCompra = void 0;
const pool = require('../config');
const agregarCompra = (id_producto, id_usuario, fechacompra, cantidadproducto) => {
    // Aquí va tu lógica para agregar la compra
    const query = {
        text: 'INSERT INTO compras(id_producto, id_usuario, fechacompra, cantidadproducto) VALUES($1, $2, $3, $4)',
        values: [id_producto, id_usuario, fechacompra, cantidadproducto],
    };
    pool.query(query, (err, res) => {
        if (err) {
            console.log(err.stack);
        }
        else {
            console.log(res.rows[0]);
        }
    });
};
exports.agregarCompra = agregarCompra;
const eliminarCompra = (id_producto, id_usuario, fechacompra) => {
    // Aquí va tu lógica para eliminar la compra
    const query = {
        text: 'DELETE FROM compras WHERE id_producto = $1 and id_usuario = $2 and fechacompra = $3',
        values: [id_producto, id_usuario, fechacompra],
    };
    pool.query(query, (err, res) => {
        if (err) {
            console.log(err.stack);
        }
        else {
            console.log('Compra eliminada con éxito');
        }
    });
};
exports.eliminarCompra = eliminarCompra;
