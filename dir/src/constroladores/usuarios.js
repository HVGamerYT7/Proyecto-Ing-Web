"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerUsuarios = void 0;
const pool = require('.../config');
const obtenerUsuarios = () => {
    pool.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            console.error(error);
        }
        else {
            console.log(results.rows);
        }
        pool.end();
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
